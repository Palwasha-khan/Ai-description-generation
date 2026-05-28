import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the main client with an options object
const genai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// Export the models service directly
export const model = {
    generateContent: async (contents) => {
        return await genai.models.generateContent({
            model: 'gemini-2.5-flash',
            // Handles both a single string prompt or an array with image data
            contents: contents 
        });
    }
};

export default genai;