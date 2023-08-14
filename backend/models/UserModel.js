const { default: mongoose } = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type:String,require:true },
    email: { type:String ,require:true },
    password: {type:String },  
    image: {type:String },  
    googleLogin:{type:Boolean,default:false}
},{timestamps:true });

const userModel=new mongoose.model("userModel",userSchema)
module.exports={userModel}