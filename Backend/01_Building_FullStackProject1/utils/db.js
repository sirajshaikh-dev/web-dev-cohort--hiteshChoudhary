import mongoose from 'mongoose'

import dotenv from "dotenv"
dotenv.config()

//export a function to connects to db

const db =()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connectd to MongoDB')
    })
    .catch((err)=>{
        console.log('Failed to connect')
    })
}
export default db

