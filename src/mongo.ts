import mongoose from 'mongoose'
import "dotenv/config"

const mongoPath = process.env.MONGO_URI

export default async() => {
    await mongoose.connect(<string>mongoPath,{
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    return mongoose
}