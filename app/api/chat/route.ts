import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { getBearerToken, getSessionFromBearerRequest } from "@/lib/bearer-session";

export const runtime = "nodejs";
export const maxDuration = 30;

const chatModel = process.env.OPENAI_CHAT_MODEL ?? "gpt-5.4-nano";

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "The assistant could not generate a response.";
}

export async function POST(request: Request) {
  const token = getBearerToken(request);
  if (!token) {
    return Response.json({ error: "Missing bearer token." }, { status: 401 });
  }

  const sessionRecord = await getSessionFromBearerRequest(request);
  if (!sessionRecord) {
    return Response.json({ error: "Invalid session." }, { status: 401 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "OPENAI_API_KEY is not configured on the backend." },
      { status: 500 },
    );
  }

  let body: { messages?: UIMessage[] };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON request body." }, { status: 400 });
  }

  if (!Array.isArray(body.messages)) {
    return Response.json({ error: "Expected a messages array." }, { status: 400 });
  }

  const userName =
    sessionRecord.user.firstName ?? sessionRecord.user.name.split(" ")[0] ?? "there";

  try {
    const result = streamText({
      model: openai(chatModel),
      system: [
        "You are Seep AI, a concise and supportive assistant for the Seep Baby app.",
        "Help parents with practical baby-care, feeding, sleep, product, and account questions.",
        "Do not provide medical diagnoses. For urgent or concerning symptoms, advise contacting a qualified clinician or emergency services.",
        `The current signed-in user's first name is ${userName}.`,
      ].join(" "),
      messages: await convertToModelMessages(body.messages),
      onError({ error }) {
        console.error("[CHAT][STREAM_ERROR]", error);
      },
    });

    return result.toUIMessageStreamResponse({
      originalMessages: body.messages,
      onError(error) {
        console.error("[CHAT][UI_STREAM_ERROR]", error);
        return getErrorMessage(error);
      },
    });
  } catch (error) {
    console.error("[CHAT][REQUEST_ERROR]", error);
    return Response.json(
      { error: getErrorMessage(error) },
      { status: 500 },
    );
  }
}
