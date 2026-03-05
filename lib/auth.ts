import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { oneTap } from "better-auth/plugins";
import { prisma } from "@/lib/prisma";
import { sendResetPasswordEmailMessage, sendVerificationEmailMessage } from "@/lib/email";

interface SignInEvent {
  session?: { token?: string };
  sessionToken?: string;
}

interface AuthContext {
  request: Request;
  response?: Response;
}

const authSecret = process.env.BETTER_AUTH_SECRET;
const appBaseURL = process.env.BETTER_AUTH_URL ?? "http://localhost:3000";
const trustedOrigins = Array.from(
  new Set(
    [
      appBaseURL,
      "http://localhost:3000",
      "http://127.0.0.1:3000",
      "seepbaby://auth-callback",
      process.env.BETTER_AUTH_TRUSTED_ORIGINS,
    ]
      .flatMap((value) => (value ? value.split(",") : []))
      .map((value) => value.trim())
      .filter(Boolean),
  ),
);

if (!authSecret || authSecret.length < 32) {
  throw new Error(
    "BETTER_AUTH_SECRET must be set and at least 32 characters long.",
  );
}

export const auth = betterAuth({
  baseURL: appBaseURL,
  trustedOrigins,
  secret: authSecret,
  user: {
    additionalFields: {
      firstName: {
        type: "string",
        required: false,
      },
      lastName: {
        type: "string",
        required: false,
      },
      phoneNumber: {
        type: "string",
        required: false,
      },
      dateOfBirth: {
        type: "string",
        required: false,
      },
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  experimental: {
    joins: true,
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      void sendResetPasswordEmailMessage({
        to: user.email,
        name: user.name,
        resetUrl: url,
      }).catch((error) => {
        console.error("[AUTH][RESET_PASSWORD_EMAIL_ERROR]", error);
      });
    },
    onPasswordReset: async ({ user }) => {
      console.log(`[AUTH][PASSWORD_RESET_SUCCESS] ${user.email}`);
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      void sendVerificationEmailMessage({
        to: user.email,
        name: user.name,
        verificationUrl: url,
      }).catch((error) => {
        console.error("[AUTH][VERIFICATION_EMAIL_ERROR]", error);
      });
    },
  },
  socialProviders: process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          redirectURI: `${appBaseURL}/api/auth/callback/google`,
        },
      }
    : {},
  plugins: [
    oneTap({
      clientId: process.env.GOOGLE_CLIENT_ID,
    }),
  ],
  events: {
    async onSignIn(event: SignInEvent, ctx: AuthContext) {
      try {
        const url = new URL(ctx.request.url);
        const redirectUri = url.searchParams.get("redirect_uri");
        const token = event.session?.token ?? event.sessionToken;

        if (!redirectUri || !token) {
          return;
        }

        const callbackUrl = new URL(redirectUri);
        callbackUrl.searchParams.set("token", token);
        ctx.response = Response.redirect(callbackUrl.toString(), 302);
      } catch {
        // Keep default Better Auth behavior if redirect parsing fails.
      }
    },
  },
});
