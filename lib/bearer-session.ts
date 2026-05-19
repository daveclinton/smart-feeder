import { prisma } from "@/lib/prisma";

export function getBearerToken(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return null;

  const [scheme, value] = authHeader.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !value) return null;

  return value.trim();
}

export async function getSessionFromBearerToken(token: string) {
  const sessionRecord = await prisma.session.findUnique({
    where: { token },
    include: { user: true },
  });

  if (!sessionRecord) return null;
  return sessionRecord;
}

export async function deleteSessionById(id: string) {
  await prisma.session.delete({ where: { id } }).catch(() => {});
}

export async function getSessionFromBearerRequest(request: Request) {
  const token = getBearerToken(request);
  if (!token) return null;

  const sessionRecord = await getSessionFromBearerToken(token);
  if (!sessionRecord) return null;

  if (sessionRecord.expiresAt <= new Date()) {
    await deleteSessionById(sessionRecord.id);
    return null;
  }

  return sessionRecord;
}
