import mongoose from 'mongoose'
import { isValidMobileNumber, isValidEmail } from "../utils/utils.js";


const patientSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        lowercase : true,
        unique : true
    },
    password:{
        type:String,
        required:true,
        maxLength : [15,"Your password cannot exceed 15 characters"],
        minLength : [6,"Your password should be contain minimum 6 characters"],
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        validate: {
            validator: (v)=> isValidMobileNumber(v),
            message: 'Invalid mobile number'
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: (v)=> isValidEmail(v),
            message: 'Invalid email address'
        }
    },
    place:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
    
})

const Model = mongoose.model('Patient',patientSchema)

export default Model


