const ProductSchema=require("../Model/products.model");

//for fetching all the product data by find method in mongoose
const GetAllProduct=async (req,res)=>{
    try
    {
        //getting the all the products
        const result=await ProductSchema.find({});
        //responsing to the request 
        res.status(200).json({products:result});
    }
    //error handling
    catch(err)
    {
        //responsing with server timeout
        res.status(500).json({err:err.message});
    }
}

//for fetching the product by id
const GetProductById=async (req,res)=>{
    try
    {
        //getting the all the products by id using findOne method in mongoose
        const result=await ProductSchema.findOne({_id:req.params.id});
        //responsing to the request 
        res.status(200).json({product:result});
    }
    //error handling
    catch(err)
    {
        //responsing with server timeout
        res.status(500).json({err:err.message});
    }
}


//exporting the controllers
module.exports={
    GetAllProduct,
    GetProductById
}