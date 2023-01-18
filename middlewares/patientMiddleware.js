import { isValidMobileNumber ,isValidEmail} from "../utils/utils.js";

export function userMiddleware(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let name = req.body.name;
  let place = req.body.name;
  let phone = req.body.phone;
  let email = req.body.email;
  let role = req.body.role;

  if (!username) {
    res.send("Username is required");
  }
  if (!password) {
    res.send("password is required");
  }
  if (!name) {
    res.send("name is required");
  }
  if (!place) {
    res.send("place is required");
  }
  if (!phone) {
    res.send("phone is required");
  }
  if (!isValidMobileNumber(phone)) {
    res.send("your mobile number not match required format");
  }
  if (!email) {
    res.send("email is required");
  }
  if (!isValidEmail(email)) {
    res.send("your email address not match required format");
  }
  if (!role) {
    res.send("role is required");
  }

  next();
}
