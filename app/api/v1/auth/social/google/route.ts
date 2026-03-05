import { auth } from "@/lib/auth";

type GoogleSocialRequest = {
  id_token?: string;
};

export async function POST(request: Request) {
  let body: GoogleSocialRequest;

  try {
    body = (await request.json()) as GoogleSocialRequest;
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  if (!body.id_token) {
    return Response.json({ error: "id_token is required." }, { status: 400 });
  }

  const callbackRequest = new Request(
    new URL("/api/auth/one-tap/callback", request.url),
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ idToken: body.id_token }),
    },
  );

  const callbackResponse = await auth.handler(callbackRequest);
  const raw = await callbackResponse.text();

  let parsed: { token?: string; user?: unknown; error?: string } = {};
  try {
    parsed = raw ? (JSON.parse(raw) as typeof parsed) : {};
  } catch {
    return Response.json(
      { error: "Invalid response from auth provider." },
      { status: 502 },
    );
  }

  if (!callbackResponse.ok || !parsed.token) {
    return Response.json(
      { error: parsed.error ?? "Google authentication failed." },
      { status: callbackResponse.status || 401 },
    );
  }

  return Response.json({
    access_token: parsed.token,
    refresh_token: parsed.token,
    token_type: "Bearer",
    expires_in: 60 * 60 * 24 * 7,
    user: parsed.user ?? null,
  });
}
