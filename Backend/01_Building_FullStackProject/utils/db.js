import mongoose, { trusted } from "mongoose";

import dotenv from "dotenv";
dotenv.config();

//export a function to connects to db

const db = async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('Connectd to MongoDB')
    })
    .catch((err)=>{
        console.log('Failed to connect')
    })
}

//  ->  Using try catch <-

// const db = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL);
//     console.log("Connectd to MongoDB");
//   } catch (err) {
//     console.error("Failed to connect",err);
//     process.exit(1)   //exit if db connection fails
//   }
// };

export default db;
