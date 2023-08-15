const { userModel } = require("../models/UserModel");
const { uploadFile } = require("../aws/aws");
const { hassPassword, compare } = require("../Bcrypt/bcrypt");
var jwt = require('jsonwebtoken');
require('dotenv').config()
var validator = require('validator');

//registration
const registration = async (req, res) => {
  try {
    let url;
    let { name, email, password } = req.body;
    console.log(req.body);
    if (!email || !password || !name)
      return res.status(400).send({ status: false, message: "empty field" });
    
    let checkvalidemail=validator.isEmail(email); 
    if(!checkvalidemail) return res.status(400).send({ status: false, message: "invalid email" });
    const user = await userModel.findOne({ email: req.body.email });
    if (user)
      return res
        .status(400)
        .send({ status: false, message: "email already used" });
    console.log("helloe");
    if (req.file) {
      url = await uploadFile(req.file);
    } else {
      url =
        "https://imgs.search.brave.com/dquj55xGA_wheoRg8JKy5NDOWnzBY_QlfkasuP0Lxo4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1pY29uL21h/bGUtdXNlci1zaGFk/b3dfMzE4LTM0MDQy/LmpwZz9zaXplPTYy/NiZleHQ9anBn";
    }
    let hpassword = await hassPassword(req.body.password);
    let data = await userModel.create({
      ...req.body,
      password: hpassword,
      image: url,
    });
    res
      .status(201)
      .send({ status: true, message: "Registration Done", data: data });
  } catch (error) {
    return res
      .status(400)
      .send({ status: false, message: "server Crashed", error });
  }
};

//login
const login = async (req, res) => {
  try {
  console.log(req.body,"a")
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).send({ status: false, message: "empty field" });      
    let checkvalidemail=validator.isEmail(email); 
    if(!checkvalidemail) return res.status(400).send({ status: false, message: "invalid email" });
    let checkemail=await userModel.findOne({email})
    if(!checkemail) return res.status(404).send({status:false,message:"Register first"})
    console.log(checkemail.password)
    var result = await compare(password , checkemail.password)
  if(!result)return res.status(400).send({status:false,message:"Wrong Password"})
  var token = jwt.sign({ id:checkemail._id},process.env.JWT, { expiresIn: '1h' });
   res.status(200).send({status:true,message:"Successfull",token:token})
  } catch (error) {
    return res
      .status(400)
      .send({ status: false, message: "server Crashed", error });
  }
};

//google-Login-registration
const googleLogin = async (req, res) => {
  let user=await userModel.findOne({email:req.body.email})
  if (!user){
    let data = await userModel.create({
      ...req.body,
      name:req.body.displayName,
      image:req.body.photoURL,
      googleLogin:true
    });
    var token = jwt.sign({id:data._id},process.env.JWT,{ expiresIn: '1h' });
    res.status(200).send({status:true,message:'success',data:data,token:token})
  }
  if(user){
    var token = jwt.sign({id:user._id},process.env.JWT,{ expiresIn: '1h' });
    res.status(200).send({status:true,message:'success',data:user,token:token})
  }
   

};


module.exports = { registration,login,googleLogin};
