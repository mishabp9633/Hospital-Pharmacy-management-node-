import { isValidMobileNumber ,isValidEmail} from "../utils/utils.js"

export function userMiddleware(req, res, next) {
  let username = req.body.username
  let password = req.body.password
  let name = req.body.name
  let place = req.body.name
  let phone = req.body.phone
  let email = req.body.email
  let role = req.body.role
  let department = req.body.department
  let year_of_experience = req.body.year_of_experience
  let start_time= req.body.start_time
  let end_time= req.body.end_time

  if (!username) {
    res.send("Username is required")
  }
  if (!password) {
    res.send("password is required")
  }
  if (!name) {
    res.send("name is required")
  }
  if (!place) {
    res.send("place is required")
  }
  if (!phone) {
    res.send("phone is required")
  }
  if (!isValidMobileNumber(phone)) {
    res.send("your mobile number not match required format")
  }
  if (!email) {
    res.send("email is required")
  }
  if (!isValidEmail(email)) {
    res.send("your email address not match required format")
  }
  if (!role) {
    res.send("role is required")
  }
  if (!department) {
    res.send("department is required")
  }
  if (!year_of_experience) {
    res.send("year_of_experience is required")
  }
  if (!start_time) {
    res.send("start_time is required")
  }
  if (!end_time) {
    res.send("end_time is required")
  }


  next()
}
