import OpenAI from "openai";

function client() {
  const apiKey = process.env.OPENAI_API_KEY || process.env.AI_INTEGRATIONS_OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({ apiKey, baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL || undefined });
}

export async function generateEmailResponse(
  emailContext: string,
  businessContext: string
): Promise<string> {
  const openai = client();
  if (!openai) return "The live demo is resting at the moment. Get in touch and I'll show you it working.";
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `You are an AI assistant helping a property management business owner respond to emails professionally and efficiently. 
        
Business Context: ${businessContext}

Generate a professional, concise email response that:
- Addresses the sender's concerns directly
- Maintains a friendly but professional tone
- Is specific and actionable
- Keeps it brief (2-3 paragraphs max)
- Does not include a subject line or salutation (those will be added separately)`,
      },
      {
        role: "user",
        content: `Generate a response to this email:\n\n${emailContext}`,
      },
    ],
    temperature: 0.7,
    max_tokens: 300,
  });

  return completion.choices[0]?.message?.content || "Unable to generate response. Please try again.";
}
