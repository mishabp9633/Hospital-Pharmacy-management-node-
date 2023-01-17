import dotenv from 'dotenv' 
import express from 'express'
import {Initialize} from './database/connection.js'

dotenv.config()

await Initialize()

const app=express()

app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true}))

// app.use('/')


//port declare
const port = process.env.PORT || 4000 ;
app.listen(port , ()=>{
 console.log(`server listening at http://localhost:${port}`);
})
