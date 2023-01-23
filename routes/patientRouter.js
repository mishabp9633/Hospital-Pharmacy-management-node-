import  express from 'express'
import {
    postData,getAllDatas,getSingleDatas,updateData,deleteData
} from '../controller/patientController.js'

 import { upload } from '../middlewares/multerMiddleware.js'



const router = express.Router()



router.post('/',upload.single('photo'),postData)

router.get('/',getAllDatas)

router.get('/:id',getSingleDatas)

router.put('/:id',updateData)

router.delete('/:id',deleteData)

export default router

