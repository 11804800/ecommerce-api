const express=require("express");
const bodyparser=require('body-parser');
const { UserLogin, RegisterUser } = require("../Controller/user.controller");
const UserRouter=express.Router();

UserRouter.use(bodyparser.json());

//for login  /user/login
UserRouter.post("/login",UserLogin);

//for registering the user /user/register
UserRouter.post("/register",RegisterUser);

module.exports=UserRouter;