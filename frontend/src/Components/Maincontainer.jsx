import React from 'react'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import Sidebar from './Sidebar'
import WorkArea from './WorkArea'
import WelcomePage from './WelcomePage'
import CreateGroups from '../Pages/CreateGroups'
import UserGroup from './UserGroup'
import Login from '../Pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Maincontainer() {
    const Maincontainer = styled(Box)({
  backgroundColor:'#f4f5f8',
  height:'90vh'
  ,width:'90%',
  display: "flex",
  borderRadius:'20px',
  backgroundColor:'aliceblue'

    })
    
  return (
    <Maincontainer>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="welcomePage" element={<><Sidebar /> <WelcomePage /></>}/>
        <Route path="createGroups" element={<><Sidebar /> <CreateGroups /></>} />
        <Route path="UserGroup" element={<><Sidebar /> <UserGroup /></>} />
        <Route path="chat" element={<><Sidebar /> <WorkArea /></>} />
      </Routes>
    </Maincontainer>
)
}

      
