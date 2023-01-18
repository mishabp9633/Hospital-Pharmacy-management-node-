import docterModel from '../models/doctorModel.js'


export async function save(name, username, password, email, place,
    phone, role, department, year_of_experience,
    start_time, end_time) {

    const result = new docterModel({
        name,
        phone,
        password,
        place,
        username,
        email,
        role,
        department,
        year_of_experience,
        start_time,
        end_time
    })
    await result.save()
    return { result }
}

export async function getAllData() {
    const result = await docterModel.find()
    return { result }
}


export async function getSingleData(id) {
    const result = await docterModel.findById(id)
    return { result }
}

export async function update(req, res) {
    const result = await docterModel.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        place: req.body.place,
        phone: req.body.phone,
        role: req.body.role,
        department: req.body.department,
        year_of_experience: req.body.year_of_experience,
        start_time: req.body.start_time,
        end_time: req.body.end_time,

    }, {
        new: true
    })
    return { result }
}


export async function Delete(id) {
    const result = await docterModel.findByIdAndDelete(id)
    return { result }
}