import React, { useState } from 'react';
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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;