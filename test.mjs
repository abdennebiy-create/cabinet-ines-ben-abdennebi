import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
async function run() {
  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.7-flash",
      input: "hi",
    });
    console.log(interaction.output_text);
  } catch (err) {
    console.error("ERROR:", err);
  }
}
run();
