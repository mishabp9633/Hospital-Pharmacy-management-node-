import patientModel from '../models/patientModel.js'


export async function save(name,username,password,email,place,phone,role){
   const result = new patientModel({
    name,
    phone,
    password,
    place,
    username,
    email,
    role
   })
   await result.save()
   return {result}
}

export async function getAllData(){
    const result = await patientModel.find()
    return {result}
}


export async function getSingleData(id){
    const result = await patientModel.findById(id)
    return {result}
}

export async function update(req,res){
    const result = await patientModel.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        place:req.body.place,
        phone:req.body.phone,
        role:req.body.role
        },{
            new:true
        })
    return {result}
}


export async function Delete(id){
    const result = await patientModel.findByIdAndDelete(id)
    return {result}
}