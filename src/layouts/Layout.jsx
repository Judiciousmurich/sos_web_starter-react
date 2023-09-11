import React from 'react'
import { Navbar } from '../shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout