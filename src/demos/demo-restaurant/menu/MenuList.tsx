import React from 'react';
import { Menu } from 'antd';
import { MenuTableViewProps } from './MenuTableView';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

const DemoMenuList : React.FC<MenuTableViewProps> = (props: MenuTableViewProps) => {

    const nav = useNavigate();

    const { categories } = props;

    return (
        <Menu className='demo-menu-list-container'>
            <h1 className='demo-menu-list-title'>Main Menu</h1>
            {categories.map((item) => (
                <Menu.Item key={item.id} onClick={()=>{
                    nav(`/demo/restaurant/menu/items/${item.id}`);
                }}>{item.name}</Menu.Item>
            ))}
        </Menu>
)};

export default DemoMenuList;