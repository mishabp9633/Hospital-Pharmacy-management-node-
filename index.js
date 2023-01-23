import dotenv from 'dotenv' 
import express from 'express'
import {Initialize} from './database/connection.js'
import patientRouter from './routes/patientRouter.js'
import doctorRouter from './routes/doctorRouter.js'
import {error} from './middlewares/errorMiddleware.js'
import cors from 'cors'
import path from 'path'




dotenv.config()

await Initialize()

const app=express()

app.use('/uploads',express.static(path.join('uploads')));

app.use(cors({origin:true , credentials:true}))

app.use(express.json({limit:"50mb"}))
app.use(express.urlencoded({limit:"50mb",extended:true}))

//api
app.use('/api/patients',patientRouter)
app.use('/api/doctors', doctorRouter)


app.use(error)

//port declare
const port = process.env.PORT || 5000 ;
app.listen(port , ()=>{
 console.log(`server listening at http://localhost:${port}`);
})
