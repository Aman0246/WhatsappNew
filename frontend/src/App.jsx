import { Box } from '@mui/material'
import './App.css'
import Maincontainer from './Components/Maincontainer'
import Login from './Pages/Login'
import axios from 'axios'
function App() {
  axios.defaults.baseURL = import.meta.env.VITE_PORT;

  return (
    <Box className="flex justify-center items-center  h-screen "style={{  backgroundColor:'#dddedd'}}>
   <Maincontainer/>
    </Box>
  )
}

export default App
