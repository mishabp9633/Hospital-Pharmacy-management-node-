import mongoose from 'mongoose'

mongoose.set('strictQuery', false)


const connection_string = 'mongodb://localhost:27017/pharma_care'

export async function Initialize() {
    try {
        await mongoose.connect(connection_string)
        console.log('mongodb connected');
    } catch (err) {
        throw err
    }

}
