const express=require('express');
const bodyparser=require('body-parser');

const ProductRouter=express.Router();


//for fetching all the data
ProductRouter.get("/",(req,res)=>{
    res.send("Hello");
});

//fpr fetching the products by id
ProductRouter.get("/:id",(req,res)=>{
    res.send("Hello"+req.params.id);
});

module.exports=ProductRouter;