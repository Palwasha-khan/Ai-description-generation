import { model } from '../config/genai.js'
import generatePrompt from '../utils/generatePrompt.js'

export const generateDescription = async (req, res, next) => {
    try {
        const { category, material, occasion } = req.body

        if (!category || !material || !occasion) {
            return res.status(400).json({
                success: false,
                message: 'Category, material and occasion required'
            })
        }

        const prompt = generatePrompt(category, material, occasion)

        let result

        // If image uploaded use vision
        if (req.file) {
            const base64Image = req.file.buffer
                .toString('base64')
            const mimeType = req.file.mimetype

            result = await model.generateContent([
                prompt,
                {
                    inlineData: {
                        data: base64Image,
                        mimeType
                    }
                }
            ])
        } else {
            // Text only
            result = await model.generateContent(prompt
            )
        }

        const rawContent = result.response.text()

        const cleaned = rawContent
            .replace(/```json/g, '')
            .replace(/```/g, '')
            .trim()

        const parsed = JSON.parse(cleaned)

        res.status(200).json({
            success: true,
            data: parsed
        })

    } catch (error) {
        next(error)
    }
}