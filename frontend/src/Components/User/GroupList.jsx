import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box } from '@mui/material';


export default function GroupList() {
  return (
    <Box sx={{ flex:10,display:'flex',margin:"0px",borderRadius:'20px'}}>

    <Box sx={{width:'100%'}}  >
        <Box className="flex" sx={{backgroundColor:'white',padding:'10px 5px',gap:2,borderRadius:'20px',margin:'5px 5px',alignItems:'center'}}>

      <AccountCircleOutlinedIcon sx={{width:'3rem',height:'3rem'}}/>
      <Box sx={{width:'100%'}}>
<Box >

      <Box sx={{fontSize:'20px'}}>GroupName</Box>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      {/* <Box sx={{fontSize:'12px'}}>Aman kashyap</Box> */}
      <Box sx={{fontSize:'12px',paddingRight:'5px'}}>today</Box>

      </Box>
</Box>
      </Box>
        </Box>
    </Box>  

    </Box>
  )
}
