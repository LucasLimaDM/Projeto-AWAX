
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;
console.log('GEMINI_API_KEY:', API_KEY ? 'Definida' : 'Não definida');

if (!API_KEY) {
  throw new Error("GEMINI_API_KEY não está definida no ambiente");
}

const genAI = new GoogleGenerativeAI(API_KEY);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 6000,
  responseMimeType: "text/plain",
};

export function startChat() {
  return genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).startChat({
    generationConfig,
    history: [],
  });
}

export async function generateResponse(prompt: string) {
  const chat = startChat();
  const result = await chat.sendMessage(prompt);
  return result.response.text();
}