import { Box } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

export default function WelcomePage() {
  useEffect(()=>{
    const fetchusers=async()=>{
      try {
        await axios.get('/alluser',{headers:{token:localStorage.getItem('token')}}).then((e)=>{
          console.log(e.data.data.length)})
      } catch (error) {
        console.log(error)
      }
    }
    fetchusers()
  },[])
  return (
    <Box sx={{flex:.7,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
    <img style={{width:'50%'}} src="https://www.bluenetvista.com/wp-content/uploads/2017/10/live-chat.png" alt="LiveChat" />    
    <Box className=" text-gray-400 text-xl">View all text directly to people Present in the chat Room</Box>
    </Box>
  )
}
