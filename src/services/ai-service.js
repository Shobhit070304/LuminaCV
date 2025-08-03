import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const analyzeResume = async (text) => {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
You are an AI resume evaluator. Analyze the following resume and return:

1. A total score out of 100
2. A breakdown:
   - Clarity (20)
   - Skills relevance (20)
   - Experience depth (20)
   - Education (20)
   - Formatting (20)
3. Specific feedback in bullet points

Format your response strictly like:
{
  "score": 87,
  "breakdown": {
    "clarity": 17,
    "skills": 18,
    "experience": 20,
    "education": 16,
    "formatting": 16
  },
  "feedback": [
    "Great experience section.",
    "Add recent technologies.",
    "Improve formatting consistency."
  ]
}

Resume:
${text}
    `;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  // get text and clean it up
  const cleanedText = response
    .text()
    .replace(/```(?:json)?/g, "")
    .trim();

  return JSON.parse(cleanedText);
};
