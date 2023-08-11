import { Box, Button } from '@mui/material'
import React from 'react'

export default function CreateGroups() {
  return (
    <Box sx={{flex:.7,justifyContent:'center',alignItems:'center',display:'flex',gap:5}}>
    
        <input style={{width:'80%',padding:'20px',fontSize:'20px',outline:'none',borderRadius:'20px'}} placeholder='Enter Group Name' />
          <Button variant='contained' sx={{background:'#6ea5ff'}} >Create</Button>
    </Box>
  )
}
