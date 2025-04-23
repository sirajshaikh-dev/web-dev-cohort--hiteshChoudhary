import express from 'express'  
import dotenv from 'dotenv'    
import cors from 'cors'
import db from './utils/db.js' //remember to add .js

dotenv.config()  // Load environment variables from a .env file into process.env

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET, POST, PUT, DELETE'],
  allowedHeaders: ['Content-Type','Authorization']
}))

app.use(express.json())  // backend will accept json data
const port = process.env.PORT || 3000 

app.use(express.urlencoded({ extended: true }))  // backend will accept form data

app.get('/', (req, res) => {   // req, res are objects that express passes to the callback function
  res.send('Hello World!')
})

app.get('/siraj', (req, res) => { // this func will run when client send rqst to /siraj 
  res.send('Hello Siraj!')
})

//connect to db
db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
