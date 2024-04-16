import React from 'react';
import './Menu.css';

export interface MenuTableViewProps {
    items: MenuItemProps[];
}

const DemoMenuTableView : React.FC<MenuTableViewProps> = (props: MenuTableViewProps) => {

    const { items } = props;

    return (
        <div className='demo-menu-table-view-container'>
            <h1>MAIN MENU</h1>
            <div className='demo-menu-table-view'>
                {items.map((item) => (
                    <DemoMenuItem key={item.key} image={item.image} name={item.name} />
                ))}
            </div>
        </div>
    )
}

interface MenuItemProps {
    key: number;
    image: string;
    name: string;
}

const DemoMenuItem : React.FC<MenuItemProps> = (props: MenuItemProps) => {

    const { image, name } = props;

    return (
        <div className='demo-menu-item-container'>
            <img className='demo-menu-item-img' src={image} alt={name} />
            <div className='demo-menu-item-name-container'>
                <h2 className='demo-menu-item-name'>{name}</h2>
            </div>
        </div>
    )
}

export default DemoMenuTableView;