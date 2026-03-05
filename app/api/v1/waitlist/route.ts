import { sendWaitlistConfirmationEmailMessage } from "@/lib/email";
import { prisma } from "@/lib/prisma";

type WaitlistPayload = {
  email?: string;
  name?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: WaitlistPayload;

  try {
    body = (await request.json()) as WaitlistPayload;
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const name = body.name?.trim() || null;

  if (!email || !isValidEmail(email)) {
    return Response.json({ error: "A valid email is required." }, { status: 400 });
  }

  const signup = await prisma.waitlistSignup.upsert({
    where: { email },
    update: { name },
    create: {
      email,
      name,
      source: "landing-page",
    },
  });

  if (!signup.confirmationEmailSentAt) {
    try {
      await sendWaitlistConfirmationEmailMessage({ to: email, name });
      await prisma.waitlistSignup.update({
        where: { id: signup.id },
        data: { confirmationEmailSentAt: new Date() },
      });
    } catch {
      return Response.json(
        {
          error:
            "Saved your waitlist signup, but we could not send confirmation email right now.",
        },
        { status: 502 },
      );
    }
  }

  return Response.json({
    ok: true,
    alreadyJoined: Boolean(signup.confirmationEmailSentAt),
    message: signup.confirmationEmailSentAt
      ? "You are already on the waitlist."
      : "You have joined the waitlist. Check your inbox for confirmation.",
  });
}
