import  express from 'express'
import {
    postData,getAllDatas,getSingleDatas,updateData,deleteData
} from '../controller/patientController.js'


const router = express.Router()


router.post('/',postData)

router.get('/',getAllDatas)

router.get('/:id',getSingleDatas)

router.put('/:id',updateData)

router.delete('/:id',deleteData)

export default router

