import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { generateAIChatResponse } from './aiService.js' // Import our clean AI logic

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

// Clean, modular chat route
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body

        if (!message) {
            return res.status(400).json({ 
                error: 'Message is required' 
            })
        }

        // Call the external AI service function
        const reply = await generateAIChatResponse(message)

        res.status(200).json({ reply })

    } catch (error) {
        console.error('Server Integration Error:', error.message)
        res.status(500).json({ 
            error: 'Something went wrong processing your AI request.' 
        })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`)
})