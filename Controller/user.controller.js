const UserSchema = require("../Model/users.model");

//for registering the user
async function RegisterUser(req, res) {
  try {
    const result = await UserSchema.create({
      username: req.body.username,
    });
    res.status(201).json({
      message: "User Registration SuccessFull",
      result: result,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//for loggin
async function UserLogin(req, res) {
  try {
    const user = req.body.username;
    const result = await UserSchema.findOne({ username: user });
    if (result) {
      const token = jwt.sign({ user: user }, "12345-67890-09876-54321", {
        expiresIn: "1m",
      });
      res.status(200).json({ message: "Login Successfull", token: token });
    }
    else
    {
        return res.status(404).json({message:"User Not Found"})
    }
  } catch (err) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { RegisterUser, UserLogin };
