import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DB connected")
    } catch (error) {
        console.log(error)
        process.exit(1) //exit with failure
    }
}

