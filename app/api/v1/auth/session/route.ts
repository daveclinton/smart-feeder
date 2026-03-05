import { prisma } from "@/lib/prisma";

function getBearerToken(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return null;
  const [scheme, value] = authHeader.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !value) return null;
  return value.trim();
}

export async function GET(request: Request) {
  const token = getBearerToken(request);
  if (!token) {
    return Response.json({ error: "Missing bearer token." }, { status: 401 });
  }

  const sessionRecord = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!sessionRecord) {
    return Response.json({ error: "Invalid session." }, { status: 401 });
  }

  if (sessionRecord.expiresAt <= new Date()) {
    await prisma.session.delete({ where: { id: sessionRecord.id } }).catch(() => {});
    return Response.json({ error: "Session expired." }, { status: 401 });
  }

  const { user, ...session } = sessionRecord;
  return Response.json({
    session,
    user,
  });
}
