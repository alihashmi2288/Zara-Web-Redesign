import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export interface OutfitRecommendation {
  title: string;
  description: string;
  items: string[];
}

export async function getStylistAdvice(prompt: string): Promise<OutfitRecommendation> {
  if (!apiKey) {
    return {
      title: "ZARA Stylist",
      description: "Please configure your Gemini API key to get personalized advice.",
      items: []
    };
  }

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `You are a high-end fashion stylist for ZARA. Based on the user's request: "${prompt}", suggest a premium outfit. Return the response in JSON format.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          description: { type: Type.STRING },
          items: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["title", "description", "items"]
      }
    }
  });

  try {
    return JSON.parse(response.text || "{}") as OutfitRecommendation;
  } catch (e) {
    return {
      title: "ZARA Stylist",
      description: "I'm having trouble finding the perfect look right now. Try again later.",
      items: []
    };
  }
}
