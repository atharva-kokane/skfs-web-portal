import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();

    // ✅ Prevent empty requests
    if (
      !body.furnitureType ||
      !body.budget ||
      !body.contact
    ) {
      return Response.json(
        { quote: "Please fill required fields before generating quote." },
        { status: 400 }
      );
    }

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: "You are a furniture quotation generator.",
        },
        {
          role: "user",
          content: `
Generate a short furniture quotation using ONLY the details below.
Do NOT add extra explanation or examples.

Furniture: ${body.furnitureType}
Room: ${body.roomType}
Size: ${body.roomSize}
Budget: ${body.budget}
Requirements: ${body.requirements}

Return:
- Estimated price range in INR
- 2–3 line breakdown (material, labour, installation)
- 1 line note (price may vary after inspection)
`,
        },
      ],
      temperature: 0.3,
    });

    return Response.json({
      quote: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Groq AI Error:", error);
    return Response.json(
      { quote: "AI could not generate quote" },
      { status: 500 }
    );
  }
}
