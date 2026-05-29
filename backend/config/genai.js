import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the main client with an options object
const genai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const model = {
    generateContent: async (contents) => {
        // 1. Get response from new SDK structure
        const apiResponse = await genai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents ,
            config: {
               responseMimeType: 'application/json',
                maxOutputTokens: 800,
                temperature: 0.7   // Keeps copy creative but focused
            }
        });

        // 2. Return a fake structure that mimics what your controller expects
        return {
            response: {
                text: () => apiResponse.text // Sends back the clean string data
            }
        };
    }
};
export default genai;