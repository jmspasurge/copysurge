export const dynamic = 'force-dynamic';
import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  // Pull the key safely on the secure Vercel backend environment
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({ apiKey });

  try {
    const { prompt } = req.body;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return res.status(200).json({ text: response.text });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
