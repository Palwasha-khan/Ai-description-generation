import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import descriptionRoutes from './routes/descriptionRoutes.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// Routes
app.use('/api/v1', descriptionRoutes)

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})