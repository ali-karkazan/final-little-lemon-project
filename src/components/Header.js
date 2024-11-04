import React from 'react';
import logo from '../Asset/littlelemon_logo.png'
const Header = () => {
    return (
        <header>
            <h1>Little Lemon</h1>
            <img src={logo} alt='logo' />
        </header>
    )
}

export default Header;