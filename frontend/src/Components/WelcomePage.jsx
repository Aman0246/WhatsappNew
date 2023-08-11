import { Box } from '@mui/material'
import React from 'react'

export default function WelcomePage() {
  return (
    <Box sx={{flex:.7,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
    <img style={{width:'50%'}} src="https://www.bluenetvista.com/wp-content/uploads/2017/10/live-chat.png" alt="LiveChat" />    
    <Box className=" text-gray-400 text-xl">View all text directly to people Present in the chat Room</Box>
    </Box>
  )
}
