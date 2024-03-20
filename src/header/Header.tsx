import React from 'react';
import logo from '../logo.svg';
import './Header.css';


const Header = () => {
    return (
        <div className='Header-container'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='Header-title'>LucrumWeb</h1>
        </div>
    );
}

export default Header;