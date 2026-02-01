import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  const { query } = await req.json();

  const completion = await openai.responses.create({
    model: "gpt-5-mini",
    input: `Expand this furniture search into related terms: ${query}`,
  });

  return Response.json({
    expanded: completion.output_text,
  });
}
