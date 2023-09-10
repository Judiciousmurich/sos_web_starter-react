import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import'./navbar.css'

export const Navbar = () => {
    return (
        <header>
           
                <Link to="/" className='font-bold text-2xl text-[#b10400]  p-4'>

                    Sea Of Soup
                </Link>
                <nav className='navbar'>
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


        </header>
    )
}
