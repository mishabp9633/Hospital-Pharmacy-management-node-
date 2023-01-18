import {save,update,Delete,getAllData,getSingleData} from '../service/patientService.js'

export async function postData(req,res,next){
    try{
        let name=req.body.name
        let username=req.body.username
        let password=req.body.password
        let email=req.body.email
        let place=req.body.place
        let phone=req.body.phone
        let role=req.body.role
    
       const result = await save(name,username,password,email,place,phone,role)
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