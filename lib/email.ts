type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const emailFrom = process.env.EMAIL_FROM;
const appName = process.env.EMAIL_APP_NAME ?? "Seep Baby";
const appUrl = process.env.BETTER_AUTH_URL ?? "https://seepbaby.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProductTemplate(params: {
  preheader: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryUrl: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  notice: string;
}) {
  const preheader = escapeHtml(params.preheader);
  const eyebrow = escapeHtml(params.eyebrow);
  const title = escapeHtml(params.title);
  const subtitle = escapeHtml(params.subtitle);
  const primaryLabel = escapeHtml(params.primaryLabel);
  const primaryUrl = escapeHtml(params.primaryUrl);
  const secondaryLabel = params.secondaryLabel
    ? escapeHtml(params.secondaryLabel)
    : null;
  const secondaryUrl = params.secondaryUrl ? escapeHtml(params.secondaryUrl) : null;
  const notice = escapeHtml(params.notice);
  const safeAppName = escapeHtml(appName);
  const safeAppUrl = escapeHtml(appUrl);

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${safeAppName}</title>
  </head>
  <body style="margin:0;background:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#111827;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fb;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="padding:24px 28px 8px 28px;text-align:center;">
                <div style="font-size:20px;font-weight:800;letter-spacing:0.2px;color:#4b0082;">${safeAppName}</div>
                <div style="font-size:12px;color:#6b7280;margin-top:6px;">Smarter Feeding Starts Here</div>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 0 28px;">
                <div style="height:220px;border-radius:16px;background:linear-gradient(135deg,#f4ebff,#eef2ff);display:flex;align-items:center;justify-content:center;text-align:center;padding:20px;">
                  <div>
                    <div style="font-size:12px;font-weight:700;color:#6b21a8;letter-spacing:0.8px;text-transform:uppercase;">${eyebrow}</div>
                    <div style="font-size:28px;line-height:1.2;font-weight:800;color:#111827;margin-top:10px;">${title}</div>
                    <div style="font-size:15px;line-height:1.6;color:#4b5563;margin-top:12px;">${subtitle}</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 28px 8px 28px;text-align:center;">
                <a href="${primaryUrl}" style="display:inline-block;background:#4b0082;color:#ffffff;text-decoration:none;padding:14px 24px;border-radius:999px;font-size:15px;font-weight:700;">${primaryLabel}</a>
                ${
                  secondaryLabel && secondaryUrl
                    ? `<div style="margin-top:12px;"><a href="${secondaryUrl}" style="color:#4b0082;text-decoration:none;font-size:14px;font-weight:600;">${secondaryLabel}</a></div>`
                    : ""
                }
              </td>
            </tr>
            <tr>
              <td style="padding:8px 28px 0 28px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="width:33.33%;padding:8px;vertical-align:top;">
                      <div style="background:#faf5ff;border:1px solid #ead5ff;border-radius:12px;padding:12px;">
                        <div style="font-size:13px;font-weight:700;color:#4b0082;">Baby AI Chat</div>
                        <div style="font-size:12px;line-height:1.5;color:#5b6470;margin-top:6px;">Smart assistant that helps you understand feeding behavior.</div>
                      </div>
                    </td>
                    <td style="width:33.33%;padding:8px;vertical-align:top;">
                      <div style="background:#eef2ff;border:1px solid #c7d2fe;border-radius:12px;padding:12px;">
                        <div style="font-size:13px;font-weight:700;color:#312e81;">Smart Bottle Insights</div>
                        <div style="font-size:12px;line-height:1.5;color:#5b6470;margin-top:6px;">The bottle records feeding activity automatically.</div>
                      </div>
                    </td>
                    <td style="width:33.33%;padding:8px;vertical-align:top;">
                      <div style="background:#ecfeff;border:1px solid #a5f3fc;border-radius:12px;padding:12px;">
                        <div style="font-size:13px;font-weight:700;color:#155e75;">Feeding Analytics</div>
                        <div style="font-size:12px;line-height:1.5;color:#5b6470;margin-top:6px;">Visual insights help parents make better decisions.</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px 24px 28px;">
                <div style="font-size:12px;line-height:1.6;color:#6b7280;background:#f9fafb;border:1px solid #e5e7eb;border-radius:12px;padding:12px;">
                  ${notice}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 28px 24px 28px;border-top:1px solid #f1f5f9;">
                <div style="padding-top:16px;font-size:12px;color:#6b7280;text-align:center;">
                  <a href="${safeAppUrl}" style="color:#4b0082;text-decoration:none;">${safeAppName}</a>
                  ·
                  <a href="${safeAppUrl}/privacy-policy" style="color:#4b0082;text-decoration:none;">Privacy</a>
                  ·
                  <a href="${safeAppUrl}/terms-of-service" style="color:#4b0082;text-decoration:none;">Terms</a>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendEmail(input: SendEmailInput) {
  if (!resendApiKey || !emailFrom) {
    throw new Error("RESEND_API_KEY and EMAIL_FROM must be set.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: emailFrom,
      to: [input.to],
      subject: input.subject,
      html: input.html,
      text: input.text,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend send failed (${response.status}): ${details}`);
  }
}

export async function sendVerificationEmailMessage(params: {
  to: string;
  name?: string | null;
  verificationUrl: string;
}) {
  const greeting = params.name ? `Hi ${params.name},` : "Hi,";
  const subject = `Verify your ${appName} email`;
  const text = `${greeting}

Please verify your email for ${appName}:
${params.verificationUrl}

If you did not request this, you can ignore this email.`;
  const html = renderProductTemplate({
    preheader: "Verify your email and start feeding smarter.",
    eyebrow: "Email Verification",
    title: "Meet the Smarter Way to Feed Your Baby",
    subtitle:
      "Track feeding patterns, understand your baby's habits, and receive intelligent insights with Seep Baby.",
    primaryLabel: "Verify Email",
    primaryUrl: params.verificationUrl,
    secondaryLabel: "Get Seep Baby",
    secondaryUrl: appUrl,
    notice:
      "For your security, this verification link expires automatically. If you did not request this, you can safely ignore this email.",
  });

  await sendEmail({
    to: params.to,
    subject,
    html,
    text,
  });
}

export async function sendResetPasswordEmailMessage(params: {
  to: string;
  name?: string | null;
  resetUrl: string;
}) {
  const greeting = params.name ? `Hi ${params.name},` : "Hi,";
  const subject = `Reset your ${appName} password`;
  const text = `${greeting}

Reset your ${appName} password:
${params.resetUrl}

If you did not request this, you can ignore this email.`;
  const html = renderProductTemplate({
    preheader: "Password reset request for your Seep Baby account.",
    eyebrow: "Account Security",
    title: "Reset Your Password Securely",
    subtitle:
      "Use the secure link below to reset your password and continue tracking your baby's feeding journey.",
    primaryLabel: "Reset Password",
    primaryUrl: params.resetUrl,
    secondaryLabel: "Download the App",
    secondaryUrl: appUrl,
    notice:
      "This reset link is one-time and expires soon. If you did not request a password reset, no action is required.",
  });

  await sendEmail({
    to: params.to,
    subject,
    html,
    text,
  });
}

export async function sendWaitlistConfirmationEmailMessage(params: {
  to: string;
  name?: string | null;
}) {
  const greeting = params.name ? `Hi ${params.name},` : "Hi,";
  const subject = `You are on the ${appName} waitlist`;
  const text = `${greeting}

Thanks for joining the ${appName} waitlist.
We will notify you as soon as the app is ready.

Follow updates at ${appUrl}`;
  const html = renderProductTemplate({
    preheader: "You are officially on the Seep Baby waitlist.",
    eyebrow: "Waitlist Confirmed",
    title: "You are in. Thanks for joining.",
    subtitle:
      "We are still building Seep Baby and will email you the moment early access opens.",
    primaryLabel: "Visit Seep Baby",
    primaryUrl: appUrl,
    secondaryLabel: "Privacy Policy",
    secondaryUrl: `${appUrl}/privacy-policy`,
    notice:
      "You are receiving this email because you joined the Seep Baby waitlist from our landing page.",
  });

  await sendEmail({
    to: params.to,
    subject,
    html,
    text,
  });
}
