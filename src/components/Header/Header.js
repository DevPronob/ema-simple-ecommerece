import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <a href=""></a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Order</a>
            </div>
        </nav>
    );
};

export default Header;
