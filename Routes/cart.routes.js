const express=require('express');
const bodyparser=require('body-parser');

const CartRouter=express.Router();

//for fetching the cart data
CartRouter.get("/",(req,res)=>{
    res.send("Fetch all cart");
});


//for posting/creating new item to cart
CartRouter.post("/",(req,res)=>{
    res.send("Post the new Product")
});

//for updating the cart item 
CartRouter.put("/:id",(req,res)=>{
    res.send("Updating the cart prodcuts");
});

//for Deleting the Cart Item
CartRouter.delete("/:id",(req,res)=>{
    res.send("Deleting the cart item")
});

module.exports=CartRouter;