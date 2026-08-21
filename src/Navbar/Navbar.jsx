import { Hamburger, HamburgerIcon, Menu } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar navbar-expand-lg navbar-main'>

                <div className="container px-5 py-2 navbar-container">

                    <div className="navbar-brand-wrapper">
                        <NavLink to='#' className='navbar-brand navbar-logo text-light'>Typing Tester</NavLink>
                    </div>

                    <div className='navbar-toggler-wrapper'>
                        <button className="navbar-toggler border border-1 border-white shadow-lg navbar-toggle-btn" type="button" data-bs-target="#navbarCollapseList" data-bs-toggle="collapse">
                            <Menu className='text-white' />
                        </button>
                    </div>

                    <div className="collapse navbar-collapse navbar-menu" id='navbarCollapseList'>
                        <ul className='navbar-nav ms-auto d-block d-lg-flex text-end navbar-nav-list gap-3'>
                            <li className="nav-item navbar-nav-item ">
                                <NavLink to='/' className="nav-link text-white navbar-nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item navbar-nav-item">
                                <NavLink to='modes' className="nav-link text-white navbar-nav-link">Modes</NavLink>

                            </li>
                            <li className="nav-item navbar-nav-item">
                                <NavLink to='#' className="nav-link text-white navbar-nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Navbar