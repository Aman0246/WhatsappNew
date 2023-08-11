import { Box } from '@mui/material'
import './App.css'
import Maincontainer from './Components/Maincontainer'
import Login from './Pages/Login'

function App() {
  

  return (
    <Box className="flex justify-center items-center  h-screen "style={{  backgroundColor:'#dddedd'}}>
   {/* <Maincontainer/> */}
   <Login></Login>
    </Box>
  )
}

export default App
