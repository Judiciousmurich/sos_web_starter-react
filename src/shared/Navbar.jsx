import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='text-[#f42c37] tracking-wider text-3xl font-bold'>
                <Link to="/">Sea Of Soup</Link>
            </div>
            <div>
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

            </div>
        </div>
    )
}
