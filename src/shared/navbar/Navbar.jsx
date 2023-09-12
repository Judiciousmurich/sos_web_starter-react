import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='font-bold text-2xl text-[#b10400]  p-4'>
                <Link to="/">Sea Of Soup</Link>
            </div>

            <nav className='links'>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/menu" >
                    Menu
                </NavLink>
                <NavLink to="/order" >
                    Order
                </NavLink>
                <NavLink to="/team" >
                    Team
                </NavLink>
                <NavLink to="/testimonials" >
                    Testimonials
                </NavLink>
                <NavLink to="/blog" >
                    Blog
                </NavLink>
            </nav>


        </div >
    )
}
