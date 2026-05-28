import { GoogleGenAI } from '@google/genai'
import dotenv from 'dotenv'

dotenv.config()

// Initialize the Gemini client by passing the API key explicitly inside the options object
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
})

/**
 * Handles communication with the Gemini AI model
 * @param {string} userMessage - The message input from the client
 * @returns {Promise<string>} - The AI generated text response
 */
export const generateAIChatResponse = async (userMessage) => {

    // 🛠️ DEBUG: Log incoming message to make sure backend received it
    console.log('\n--- 📥 AI SERVICE: Incoming Request ---')
    console.log('User Message:', userMessage)
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash', // Fast, stable, and free-tier friendly
        config: {
            systemInstruction: 'You are a helpful assistant. Provide complete, clear, and fully detailed responses.',
            // Increased token count so long recipes don't get cut off mid-sentence
            maxOutputTokens: 1500, 
        },
        contents: userMessage,
    })
const aiTextOutput = response.text

    // 🛠️ DEBUG: Log exactly what the AI generated before returning it
    console.log('\n--- 📤 AI SERVICE: Raw AI Response ---')
    console.log(aiTextOutput)
    console.log('-------------------------------------\n')
    return aiTextOutput
}