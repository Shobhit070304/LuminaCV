import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const analyzeResume = async (text) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    Analyze this resume and provide a score out of 10 based on:
    - Clarity
    - Skills relevance
    - Experience depth
    - Education
    - Formatting

    Resume: ${text}

    Respond in JSON format: { score: number, feedback: string }
  `;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return JSON.parse(response.text());
};
