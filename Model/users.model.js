const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }
},{
    timeStamps:true
});

module.exports=mongoose.model("users",UserSchema);