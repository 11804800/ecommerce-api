const express=require("express");
const bodyparser=require('body-parser');
const UserRouter=express.Router();

UserRouter.use(bodyparser.json());

UserRouter.post("/login",);

UserRouter.post("/register",);

module.exports=UserRouter;