const UserSchema = require("../Model/users.model");
const jwt = require("jsonwebtoken");

//for registering the user
async function RegisterUser(req, res) {
  try {
    //first it will find the user then it check
    const user = await UserSchema.findOne({ username: req.body.username });
    //if user with the same username already exists then can't create new else it will create
    if (user) {
      res.status(403).json({ message: "User Already Exists" });
    } else {
      const result = await UserSchema.create({
        username: req.body.username,
      });
      res.status(201).json({
        message: "User Registration SuccessFull",
        result: result,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//for loggin
async function UserLogin(req, res) {
  try {
    const user = req.body.username;
    const result = await UserSchema.findOne({ username: user });
    //if the user is there then it will gettoken
    if (result) {
      //it will expires after 15minutes
      const token = jwt.sign({ user: user }, "12345-67890-09876-54321", {
        expiresIn: "15m",
      });
      res.status(200).json({ message: "Login Successfull", token: token });
    }
    //else it will return no user found
    else {
      return res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { RegisterUser, UserLogin };
