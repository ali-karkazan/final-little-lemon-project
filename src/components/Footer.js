import React from 'react';
import logo from '../Asset/littlelemon_logo.png'
const Footer = () => {
    return (
        <footer className='footer'>
            <p>&copy; 2024 Little Lemon. All rights reserved.</p>
            <img className='footer-logo' src={logo} alt='logo' />
        </footer>
    )
}

export default Footer;