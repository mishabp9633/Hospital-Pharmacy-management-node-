import {save,update,Delete,getAllData,getSingleData} from '../service/doctorService.js'

export async function postData(req,res,next){
    try{
        let name=req.body.name
        let username=req.body.username
        let password=req.body.password
        let email=req.body.email
        let place=req.body.place
        let phone=req.body.phone
        let role=req.body.role
        let department = req.body.department
        let year_of_experience = req.body.year_of_experience
        let start_time= req.body.start_time
        let end_time= req.body.end_time
    
       const result = await save(name, username, password, email, place,
        phone, role, department, year_of_experience,
        start_time, end_time)
       res.send(result)
    }catch(err){
        next(err)
    }
    
}

export async function getAllDatas(req,res,next){
    try{
       const result = await getAllData()
       res.send(result)
    }catch(err){
        next(err)
    }
        
}



export async function getSingleDatas(req,res,next){
    try{
       const result = await getSingleData(req.params.id)
       res.send(result)
    }catch(err){
        next(err)
    }
        
}


export async function updateData(req,res,next){
    try{
       const result = await update(req,res)
       res.send(result)
    }catch(err){
        next(err)
    }
        
}


export async function deleteData(req,res,next){
    try{
       const result = await Delete(req.params.id)
       res.send(result)
    }catch(err){
        next(err)
    }
        
}