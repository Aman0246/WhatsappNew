import styled from '@emotion/styled'
import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {auth,provider} from "../Firebase/googleLogin"
import {signInWithPopup } from "firebase/auth";
import { motion, AnimatePresence } from "framer-motion"
import axios from 'axios'
import { toast } from 'react-hot-toast'
const LoginWrapper=styled(Box)({
    // backgroundColor:'#f4f5f8',
  height:'90vh'
  ,width:'90%',
  display: "flex",
  borderRadius:'20px',
  backgroundColor:'aliceblue',
  justifyContent:'center',
  alignItems:'center',
  margin:'auto'
})


export default function Login() {
  const [inputdata,setinputdata]=useState({})
  const handleChange=(e)=>{
    setinputdata({...inputdata,[e.target.name]:e.target.value})
  
  }
  const handleGoogleLogin=async()=>{
    signInWithPopup(auth, provider)
    .then(async(result) => {
      await axios.post('/googleLogin',result.user).then((e)=>{
        console.log(e)
      })
      }).catch((error) => {
      console.log(error)
      });
  }
 
const handleLogin=async()=>{
  try {
    await axios.post("/login",inputdata).then(async(e)=>{
       if(e.status===200){return toast.success(e.data.message)}
       else toast.error('server Down')
     } )
     } catch (error) {
       if(error.response.data
         .message)
      return toast.error(error.response.data
         .message)
      
     }
}


  return (
    <LoginWrapper>
      <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{ease:"anticipate",duration:".2"}} style={{backgroundColor:'white',boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',borderRadius:'20px',opacity:.8,width:'30%','@media (max-width:763px)': {width:'80%'},paddingBottom:5}}> 
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:5}}>
        <TextField onChange={handleChange} sx={{marginTop:5,width:'60%'}} required name='email'  type='email' color='success' id="standard-basic" label="Email" variant="standard" />
        <TextField onChange={handleChange} sx={{width:'60%'}} color='success' name='password'  type='Password' id="standard-basic" label="Password" variant="standard" />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>

        <Button onClick={handleLogin} variant="contained" sx={{backgroundColor:'teal'}}>
        Login
      </Button>
      Or
      <Button onClick={handleGoogleLogin}  sx={{backgroundColor:'white', boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',color:'#2b8687',fontWeight:600,"&":{border:"1px solid gray",borderRadius:'50px'}}}> <img style={{width:"1.5rem",height:'1.5rem',marginRight:'5px'}} src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png" alt="GoogleButton"  />Continue With Google</Button>
      <Box sx={{fontWeight:600}}>New User ?<Link to={'/registration'}><span style={{color:"#309899",cursor:'pointer'}}> Register</span></Link></Box>
        </Box>
        </Box>
      </motion.div>
    
    </LoginWrapper>
  )
}
