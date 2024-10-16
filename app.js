const bodyParser = require("body-parser");
const express = require("express");
const ProductRouter = require("./Routes/products.routes");
const CartRouter=require("./Routes/cart.routes");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/user.routes");

//creating the instance of the express
const app = new express();

//connecting to monogdb
mongoose
  .connect("mongodb://localhost:27017/shoppyglobe")
  .then((db) => {
    //it console this if connected successfully
    console.log("Connection Successfull");
  })
  //else console err if the any error occurs in connection
  .catch((err) => console.log(err));

//for logging all the api requests  
app.use((req, res, next) => {
  console.log(req.method + "  URL:" + req.url + " " + res.statusCode);
  next();
});

//default route
app.get("/",(req,res)=>{
    res.send("Welcome to the ShoppyGlobe Rest Api")
});

//express inbuilt middleware for parsing the payload to json
app.use(express.json());

//external middleware for parsing the request body to json
app.use(bodyParser.json());

//defining routes for products
app.use("/products", ProductRouter);
//defining routes for cart
app.use("/cart",CartRouter);
//defining routes for user authentication
app.use('/user',UserRouter);


//initialzing the express server
app.listen(3000, () => {
  console.log("Server running at port 3000");
});
