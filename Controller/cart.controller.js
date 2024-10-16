const CartSchema = require("../Model/cart.model");

//for getting the cart items
async function GetCart(req, res) {
  try {
    const result = await CartSchema.find({});
    res.status(200).json({ cart: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//for posting the cart item
async function PostCart(req, res) {
  try {
    const result = await CartSchema.create({
      ProductId: req.body.ProductId,
      quantity: req.body.quantity,
      User: req.body.User,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//for deleting the cart item
async function DeleteCartItem(req, res) {
  try {
    const result = await CartSchema.deleteOne({ _id: req.params.id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//for updating the cart item
async function UpdateCartItem(req, res) {
  try {
    const result = await CartSchema.updateOne(
      { _id: req.params.id },
      {
        $set: req.body,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  GetCart,
  PostCart,
  DeleteCartItem,
  UpdateCartItem,
};
