import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import './Header.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    type?: 'group',
): MenuItem {
    return {
        key,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', '/'),
    getItem('About', '/about'),
    getItem('Services', '/getstarted#services'),
    getItem('Contact', '/contact'),
];

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate();


    const onClick = () => {
        setToggle(!toggle);
    };

    const handleMobileNav = (e: any) => {
        setToggle(false);
        navigate(e.key);
    };

    return (
        <div className='Header-container'>
            <div className='header-container-left'>
                <img src='../LW-icon.webp' className='App-logo' alt='logo' />
                <Link to={'/'} className='Header-title'>
                    Advertising & Marketing Agency
                </Link>
            </div>
            <div className='header-container-right'>
                <Link to={'/'} className='header-menu-item'>
                    Home
                </Link>
                <Link to={'/about'} className='header-menu-item'>
                    About
                </Link>
                <a href={'/getstarted#services'} className='header-menu-item'>
                    Services
                </a>
                <Link to={'/contact'} className='header-menu-item'>
                    Contact
                </Link>
            </div>
            <div
                className='header-container-mobile'
                onClick={() => {
                    onClick();
                }}
            >
                <div className='header-container-menu-icon'>
                    <MenuOutlined />
                </div>
            </div>
            <div className={`header-container-mobile-menu ${toggle ? 'slide-in' : ''}`}>
                <Menu
                    mode='inline'
                    inlineCollapsed={false}
                    style={{
                        borderRadius: '5%',
                        opacity: '0.9',
                    }}
                    items={items}
                    hidden={!toggle}
                    onClick={handleMobileNav}
                />
            </div>
        </div>
    );
};

export default Header;
