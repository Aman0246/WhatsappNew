import styled from '@emotion/styled'
import { Box, Button, TextField } from '@mui/material'
import React from 'react'
const LoginWrapper=styled(Box)({
    backgroundColor:'#f4f5f8',
  height:'90vh'
  ,width:'90%',
  display: "flex",
  borderRadius:'20px',
  backgroundColor:'aliceblue',
  justifyContent:'center',
  alignItems:'center',
})

export default function Login() {
  return (
    <LoginWrapper>
    
      <Box sx={{backgroundColor:'white',opacity:.8,width:'30%','@media (max-width:763px)': {width:'80%'},paddingBottom:5}}> 
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:5}}>
        <TextField sx={{marginTop:5,width:'60%'}} name='Email'  type='email' color='success' id="standard-basic" label="Email" variant="standard" />
        <TextField sx={{width:'60%'}} color='success' name='password'  type='Password' id="standard-basic" label="Password" variant="standard" />
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:2}}>

        <Button  variant="contained" sx={{backgroundColor:'teal'}}>
        Login
      </Button>
      Or
      <Button  sx={{backgroundColor:'white',color:'#b85959',"&":{border:"1px solid gray"}}}> <img style={{width:"1.5rem",height:'1.5rem',marginRight:'5px'}} src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png" alt="GoogleButton"  />Continue Width Google</Button>
      <Box sx={{cursor:'pointer',fontWeight:600}}>New User ? Register</Box>
        </Box>
        </Box>
      </Box>
    
    </LoginWrapper>
  )
}
