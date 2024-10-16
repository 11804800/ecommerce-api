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
  const authtoken = req.headers["authorization"];
  const token = authtoken && authtoken.split(" ")[1];
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
CartRouter.get("/", Auth, GetCart);

//middleware for checking that if the product already exists
async function CartValidation(req, res, next) {
  const result = await cartModel.findOne({ ProductId: req.body.ProductId });
  if (result) {
    res.status(403).json({ message: "Product Already Exists In the Cart" });
  } else {
    next();
  }
}

//for posting/creating new item to cart
CartRouter.post("/", Auth, CartValidation, PostCart);

//for updating the cart item
CartRouter.put("/:id", Auth, UpdateCartItem);

//for Deleting the Cart Item
CartRouter.delete("/:id", Auth, DeleteCartItem);

module.exports = CartRouter;
