import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//login
const loginFunction = async(inputdata) => {
  console.log(inputdata);
  try {
    let data=await axios.post("/login", inputdata)
    console.log(data)
      if (data.status === 200) {
         toast.success(data.data.message);
        localStorage.setItem("token",data.data.token);
        return data.data.status  ;
      } else {
        toast.error("server Down");
        return false;
      }
  
  } catch (error) {
    console.log(error);
    if (error.response.data.message)
      return toast.error(error.response.data.message);
  }
};


// get all users
const fetchusers = async () => {
  try {
    const response = await axios.get("/alluser", {
      headers: { token: localStorage.getItem("token") },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { fetchusers, loginFunction };
