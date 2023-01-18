import mongoose from 'mongoose'
import { isValidEmail, isValidMobileNumber } from '../utils/utils.js'

const docterSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
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
            message: 'Invalid mobile email address'
        }
    },
    date:{
        type:Date,
        default:Date.now
    },
    department:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    year_of_experience:{
        type:String,
        required:true
    },
    start_time:{
        type:String,
        required:true
    },
    end_time:{
        type:String,
        required:true
    }
    
})
const Model = mongoose.model('Doctor',docterSchema)

export default Model