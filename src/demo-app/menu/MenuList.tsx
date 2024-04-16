import React from 'react';
import { Menu } from 'antd';
import { MenuTableViewProps } from './MenuTableView';
import './Menu.css';

const DemoMenuList : React.FC<MenuTableViewProps> = (props: MenuTableViewProps) => {

const { items } = props;

return (
    <Menu className='demo-menu-list-container'>
        <h1 className='demo-menu-list-title'>Main Menu</h1>
        {items.map((item) => (
            <Menu.Item key={item.key}>{item.name}</Menu.Item>
        ))}
    </Menu>
)};

export default DemoMenuList;