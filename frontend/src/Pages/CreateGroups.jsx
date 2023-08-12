import { Box, Button } from '@mui/material'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
export default function CreateGroups() {
  return (
    <AnimatePresence>

    <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} transition={{ease:"anticipate",duration:".2"}} style={{ flex: .7, justifyContent: 'center', alignItems: 'center', display: 'flex', gap: 5 }}>

      <input style={{ width: '80%', padding: '20px', fontSize: '20px', outline: 'none', borderRadius: '20px' }} placeholder='Enter Group Name' />
      <Button variant='contained' sx={{ background: '#6ea5ff' }} >Create</Button>
    </motion.div>
    </AnimatePresence>
  )
}
