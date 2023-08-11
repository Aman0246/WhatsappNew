import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, IconButton } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
export default function WorkArea() {
  return (
    <Box sx={{ width: '100%',display:'flex',flexDirection:'column',flex:.7 }} >
      {/* user detail */}
      <Box className="flex" sx={{ flex:1,backgroundColor: 'white', padding: '10px 5px', gap: 2, borderRadius: '20px', margin: '10px 10px', alignItems: 'center' }}>

        <AccountCircleOutlinedIcon sx={{ width: '3rem', height: '3rem' }} />
        <Box sx={{ width: '100%' }}>
          <Box >

            <Box sx={{ fontSize: '20px' }}>Aman kashyap</Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ fontSize: '12px' }}>Online</Box>
              {/* <Box sx={{ fontSize: '12px', paddingRight: '5px' }}>today</Box> */}

            </Box>
          </Box>
        </Box>
      </Box>
      {/* Chat area */}
      <Box sx={{ flex:10,display:'flex',background:'white',padding:'10px 5px',margin:"10px",borderRadius:'20px',overflowY:'scroll'}}></Box>
      {/* Typing area */}
      <Box className="flex" sx={{ flex:1, backgroundColor: 'white', padding: '10px 5px', gap: 2, borderRadius: '20px', margin: '10px 10px', alignItems: 'center' }}>
        <Box sx={{display:'flex',flex:.5}}>
        <IconButton> 
          <TagFacesIcon sx={{ width: '2rem', height: '2rem' }} />

        </IconButton>
        <IconButton>
          <AddIcon sx={{ width: '2rem', height: '2rem' }} />
        </IconButton>
        </Box>

        <Box sx={{display:'flex',flex:5,bgcolor:'red' }} >
          <input style={{width:'100%',outline:'none'}}  placeholder='Type a message' />
        </Box>

        <Box sx={{flex:.2,width:'100%'}}>
          <IconButton>

        <SendIcon ></SendIcon>
          </IconButton>
        </Box>

      </Box>


    </Box>
  )
}
