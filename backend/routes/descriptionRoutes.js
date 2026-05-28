import express from 'express'
import { generateDescription } from '../controllers/descriptionController.js'
import upload from '../middleware/upload.js'

const router = express.Router()

router.post(
    '/generate', upload.single('image'),generateDescription
)

export default router