const { default: mongoose } = require("mongoose");
const chatSchema = new mongoose.Schema({
  chatName: { type: String },
  isGroupChat: { type: Boolean },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "userModel" }],
  latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "messageModel" },
  groupAdmin:{ type: mongoose.Schema.Types.ObjectId, ref: "userModel"}
});

const chatModel=new mongoose.model("chatModel",chatSchema)
module.exports={chatModel}