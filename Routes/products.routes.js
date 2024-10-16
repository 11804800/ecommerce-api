const express=require('express');
const bodyparser=require('body-parser');
const { GetAllProduct, GetProductById } = require('../Controller/products.controller');
const productsModel = require('../Model/products.model');

const ProductRouter=express.Router();


//for fetching all the data
ProductRouter.get("/",GetAllProduct);

//fpr fetching the products by id
ProductRouter.get("/:id",GetProductById);


module.exports=ProductRouter;