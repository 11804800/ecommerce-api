const mongoose=require("mongoose");



const ProductSchema=mongoose.Schema({
    
//unique is for storing only the distinct names 
    name:{
        type:String,
        required:true,
        unique:true
    },
    //required true for data is required to post
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    stock_quantity:{
        type:Number,
        required:true
    }

},
{
    //for getting all the data that at what time the data was created 
    //updated
    timeStamps:true
});

module.exports=mongoose.model("products",ProductSchema);