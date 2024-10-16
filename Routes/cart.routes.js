const express = require("express");
const bodyparser = require("body-parser");
const {
  DeleteCartItem,
  UpdateCartItem,
  PostCart,
  GetCart,
} = require("../Controller/cart.controller");
const cartModel = require("../Model/cart.model");

const CartRouter = express.Router();
CartRouter.use(bodyparser.json());

//for fetching the cart data
CartRouter.get("/", GetCart);

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
CartRouter.post("/", CartValidation, PostCart);

//for updating the cart item
CartRouter.put("/:id", UpdateCartItem);

//for Deleting the Cart Item
CartRouter.delete("/:id", DeleteCartItem);

module.exports = CartRouter;
