import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box } from '@mui/material';
import { motion } from "framer-motion"
export default function UserCard() {
  return (
    <motion.div whileTap={{scale:'0.9'}}  style={{cursor:'pointer'}} >
        <motion.div whileHover={{backgroundColor:'#fff4f4'}} className="flex" style={{backgroundColor:'white',padding:'10px 5px',gap:2,borderRadius:'20px',margin:'5px 5px',alignItems:'center'}}>

      <AccountCircleOutlinedIcon sx={{width:'3rem',height:'3rem'}}/>
      <Box sx={{width:'100%'}}>
<Box >

      <Box sx={{fontSize:'20px'}}>Aman kashyap</Box>
      <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Box sx={{fontSize:'12px'}}>Aman kashyap</Box>
      <Box sx={{fontSize:'12px',paddingRight:'5px'}}>today</Box>

      </Box>
</Box>
      </Box>
        </motion.div>
    </motion.div>
  )
}
