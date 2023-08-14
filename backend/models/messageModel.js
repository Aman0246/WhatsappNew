const { default: mongoose } = require("mongoose");
const messageSchema = new mongoose.Schema({
  sender:{ type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  reciever:{ type: mongoose.Schema.Types.ObjectId, ref: "userModel" },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "chatModel" },
  
},{timestamps:true });

const messageModel=new mongoose.model("messageModel",messageSchema)
module.exports={messageModel}