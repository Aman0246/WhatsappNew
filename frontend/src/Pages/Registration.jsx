import styled from '@emotion/styled'
import { Box, Button, TextField } from '@mui/material'
import { motion } from "framer-motion"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { storage } from '../Firebase/googleLogin'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import toast from 'react-hot-toast';
import {signInWithPopup } from "firebase/auth";
import {auth,provider} from "../Firebase/googleLogin"

const LoginWrapper = styled(Box)({
  backgroundColor: '#f4f5f8',
  height: '90vh'
  , width: '90%',
  display: "flex",
  borderRadius: '20px',
  backgroundColor: 'aliceblue',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto'
})

export default function Registration() {
  const navigate=useNavigate()
  const [imageUpload, setimageUpload] = useState(null)
  const [formdata, setformdata] = useState({})
  const handleChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  
  }
 
  const upload = async() => {
    if(!formdata.name||!formdata.email||!formdata.password)return toast.error("Empty field")
    const form=new FormData()
     form.append('file',imageUpload)
     form.append('name',formdata.name)
     form.append('email',formdata.email)
     form.append('password',formdata.password)
     try {
     await axios.post("/register",form).then(async(e)=>{  
        if(e.status===201){ toast.success(e.data.message)
          navigate('/')
        }
        else toast.error('server Down')
      } )
      } catch (error) {
        if(error.response.data
          .message)
       return toast.error(error.response.data
          .message)
       
      }
    // console.log(imageUpload)
    // const imgRef = ref(storage, `DisplayProfile/${imageUpload.name + new Date()}`)
    // console.log(imgRef)
    // uploadBytes(imgRef, imageUpload).then((e) => {
    //   console.log(e.metadata.contentType)
    //   getDownloadURL(imgRef).then((url) => {
    //     console.log(url)
    //   })
    // })
  }


  const handleGoogleLogin=async()=>{
    signInWithPopup(auth, provider)
    .then(async(result) => {
      await axios.post('/googleLogin',result.user).then((e)=>{
        if(e.data.data.status==true){
          localStorage.setItem("token",e.data.token)
          toast.success(e.data.data.message)
          navigate('/welcomePage')
        }
        else toast('server down')
// console.log(e)
      })
      }).catch((error) => {
        toast('server down',error)
        
      });
  
  }
  return (
    <LoginWrapper>
      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={{ ease: "anticipate", duration: ".2" }} style={{ backgroundColor: 'white', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius: '20px', opacity: .8, width: '30%', '@media (max-width:763px)': { width: '80%' }, paddingBottom: 5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 5 }}>
          <TextField sx={{ marginTop: 5, width: '60%' }} onChange={handleChange} name='name' type='email' color='success' id="standard-basic" label="Name" variant="standard" />
          <TextField sx={{ width: '60%' }} onChange={handleChange} name='email' type='email' color='success' id="standard-basic" label="Email" variant="standard" />
          <TextField sx={{ width: '60%' }} color='success' onChange={handleChange} name='password' type='Password' id="standard-basic" label="Password" variant="standard" />
          <TextField sx={{ width: '60%' }} color='success' name='file' type='file' id="standard-basic" variant="standard" onChange={(e) => { setimageUpload(e.target.files[0]) }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <Button onClick={upload} variant="contained" sx={{ backgroundColor: 'teal' }}>
              Register
            </Button>
            Or
            <Button onClick={handleGoogleLogin} sx={{ backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', color: '#2b8687', fontWeight: 600, "&": { border: "1px solid gray", borderRadius: '50px' } }}> <img style={{ width: "1.5rem", height: '1.5rem', marginRight: '5px' }} src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png" alt="GoogleButton" />Continue With Google</Button>
            <Box sx={{ fontWeight: 600 }}>Old User ?<Link to={'/'}> <span style={{ color: "#309899", cursor: 'pointer' }}> Login</span></Link></Box>
          </Box>
        </Box>
      </motion.div>

    </LoginWrapper>
  )
}
