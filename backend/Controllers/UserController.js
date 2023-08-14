const { userModel } = require("../models/UserModel");
const { uploadFile } = require("../aws/aws");

const registration = async (req, res) => {
  try {
    let url;
    let { name, email, password } = req.body;
    if (!email || !password || !name)
      return res.status(400).send({ status: false, message: "empty field" });
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
    console.log(url);
    let data = await userModel.create({ ...req.body, image: url });
    res
      .status(201)
      .send({ status: true, message: "Registration Done", data: data });
  } catch (error) {
    return res
      .status(200)
      .send({ status: false, message: "server Crashed", error });
  }
};




module.exports = { registration };
