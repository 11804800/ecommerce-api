const mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    //required true for data is required to post
    ProductId: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    //for storing user info that whose cart is this
    User:{
        type:String,
        required:true
    }
  },
  {
    //for getting all the data that at what time the data was created
    //updated
    timeStamps: true,
  }
);

module.exports = mongoose.model("cart", CartSchema);
