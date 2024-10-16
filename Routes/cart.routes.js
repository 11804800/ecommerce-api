const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const {
  DeleteCartItem,
  UpdateCartItem,
  PostCart,
  GetCart,
} = require("../Controller/cart.controller");
const cartModel = require("../Model/cart.model");

const CartRouter = express.Router();
CartRouter.use(bodyparser.json());

//auth middleware for authenticating the user
function Auth(req, res, next) {
  //getting the token from header
  const authtoken = req.headers["authorization"];
  //spliting the token from the header authorization string
  const token = authtoken && authtoken.split(" ")[1];
  //useing jwt verify method to verify the user
  jwt.verify(token, "12345-67890-09876-54321", (err, user) => {
    if (err) {
      res.status(401).json({ message: "Unathorized Access" });
    } else {
      req.user = user;
      next();
    }
  });
}

//for fetching the cart data 
//first it will authenticate the user then it will return cart items for 
//User can only access his cart items
CartRouter.get("/", Auth, GetCart);

//middleware for checking that if the product already exists with same user and productId
//user cannot store the two same products else user can update the quantity
async function CartValidation(req, res, next) {
  const result = await cartModel.findOne({$and:[{ProductId:req.body.ProductId},{User:req.user.user}]});
  if (result) {
    res.status(403).json({ message: "Product Already Exists In the Cart" });
  } else {
    next();
  }
}

//for posting/creating new item to cart
//first it will authenticate the user then it will find the product with same user and same productId
CartRouter.post("/", Auth, CartValidation, PostCart);

//for updating the cart item
CartRouter.put("/:id", Auth, UpdateCartItem);

//for Deleting the Cart Item
CartRouter.delete("/:id", Auth, DeleteCartItem);

module.exports = CartRouter;
