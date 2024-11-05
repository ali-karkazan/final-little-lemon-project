// import React, { useState } from 'react';
// import logo from '../Asset/littlelemon_logo.png'

// function Nav() {
//     const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//     const toggleNavbar = () => {
//         setIsNavbarOpen(!isNavbarOpen);
//     };
//     return (

//         <nav className='header'>
//             <button className="menu-toggle" onClick={toggleNavbar}>
//                 ☰
//             </button>
//             <nav className={`navbar ${isNavbarOpen ? "open" : ""}`}>
//                 {/* <img src={logo} alt="Little Lemon Logo" className="header-logo" /> */}
//                 <ul>
//                     <li><a href="#home">Home</a></li>
//                     <li><a href="#menu">Menu</a></li>
//                     <li><a href="#about">About</a></li>
//                     <li><a href="#contact">Contact</a></li>
//                 </ul>
//             </nav>
//         </nav>
//     )
// }

// export default Nav;