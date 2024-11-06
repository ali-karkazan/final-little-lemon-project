import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../Asset/Logo .svg'

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };
    return (

        <div className='header'>
            <img className="header-logo" src={logo} alt="Little Lemon Logo" />
            <button className="menu-toggle" onClick={toggleNavbar}>
                ☰
            </button>
            <nav className={`navbar ${isNavbarOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* <li><Link to="/booking">Booking</Link></li> */}
                    <li><Link to="/contact">Contact</Link></li>
                    <li></li><Link to="/booking">
                        <button className="reserve-table-button">Reserve a Table</button>
                    </Link><li />
                </ul>
            </nav>
        </div>
    )
}

export default Header;