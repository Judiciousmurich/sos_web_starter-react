import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='text-[#b10400] font-bold text-2xl m-4>
            Sea Of Soup
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
