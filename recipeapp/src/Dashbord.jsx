import React from 'react'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";


function Dashbord() {
  return (
    <div>
    <Navbar/>
    <Outlet /> {/* This is required to render child components */}

    </div>
  )
}

export default Dashbord
