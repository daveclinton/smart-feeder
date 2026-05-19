import {
  deleteSessionById,
  getBearerToken,
  getSessionFromBearerToken,
} from "@/lib/bearer-session";

export async function GET(request: Request) {
  const token = getBearerToken(request);
  if (!token) {
    return Response.json({ error: "Missing bearer token." }, { status: 401 });
  }

  const sessionRecord = await getSessionFromBearerToken(token);
  if (!sessionRecord) {
    return Response.json({ error: "Invalid session." }, { status: 401 });
  }

  if (sessionRecord.expiresAt <= new Date()) {
    await deleteSessionById(sessionRecord.id);
    return Response.json({ error: "Session expired." }, { status: 401 });
  }

  const { user, ...session } = sessionRecord;
  return Response.json({
    session,
    user,
  });
}
