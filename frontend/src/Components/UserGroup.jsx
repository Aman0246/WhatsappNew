import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GroupList from './User/GroupList';
import { motion } from "framer-motion"
export default function UserGroup() {
  return (
    <motion.div  initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{ease:"anticipate",duration:".2"}}style={{ width: '100%',display:'flex',flexDirection:'column',flex:.7 }} >
    {/* user detail */}
    <Box className="flex" sx={{ flex:1,backgroundColor: 'white', padding: '10px 5px', gap: 2, borderRadius: '20px', margin: '10px 10px', alignItems: 'center' }}>

      <AccountCircleOutlinedIcon sx={{ width: '3rem', height: '3rem' }} />
      <Box sx={{ width: '100%' }}>
        <Box >

          <Box sx={{ fontSize: '20px' }}>Avaliable Group</Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* <Box sx={{ fontSize: '12px' }}>Online</Box> */}
            {/* <Box sx={{ fontSize: '12px', paddingRight: '5px' }}>today</Box> */}

          </Box>
        </Box>
      </Box>
    </Box>
    {/* Serach */}
    <Box sx={{ display: 'flex', backgroundColor: 'white', borderRadius: '15px', padding: "8px 5px", margin: '10px', justifyContent: 'space-between', alignItems: 'center' }}>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <input style={{ outline: 'none', flex: 1, padding: '0 6px', paddingRight: '30px' }} placeholder='Search'></input>
      </Box>
    {/* Goup/user List RightSide */}
    <Box sx={{overflowY:'scroll',boxShadow:'rgba(100, 100, 111, 0.1) 0px 7px 29px 0px'}}>

    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    <GroupList></GroupList>
    </Box>
    {/* Typing area */}


  </motion.div>
  )
}
