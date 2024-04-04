import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='Header-container'>
            <div className='header-container-left'>
                <img src='lucrum-web.png' className="App-logo" alt="logo" />
                <Link to={'/'} className='Header-title'>Advertising & Marketing Agency</Link>
            </div>
            <div className='header-container-right'>
                <Link to={'/'} className='header-menu-item'>Home</Link>
                <Link to={'/about'} className='header-menu-item'>About</Link>
                <a href={'/getstarted#services'} className='header-menu-item'>Services</a>
                <Link to={'/contact'} className='header-menu-item'>Contact</Link>
            </div>
        </div>
    );
}

export default Header;
