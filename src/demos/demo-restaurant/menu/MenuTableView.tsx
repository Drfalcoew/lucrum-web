import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export interface MenuTableViewProps {
    categories: MenuItemProps[];
}

const DemoMenuTableView : React.FC<MenuTableViewProps> = (props: MenuTableViewProps) => {

    const { categories } = props;


    return (
        <div className='demo-menu-table-view-container'>
            <div className='demo-menu-table-view-title'>MAIN MENU</div>
            <p className='demo-menu-table-view-subtitle'>Explore Our Menu Categories</p>
            <div className='demo-menu-table-view'>
                {categories.map((item) => (
                    <DemoMenuItem id={item.id} image={item.image} name={item.name} />
                ))}
            </div>
        </div>
    )
}

interface MenuItemProps {
    id: number;
    name: string;
    image: string;
}

const DemoMenuItem : React.FC<MenuItemProps> = (props: MenuItemProps) => {

    const { id, name, image } = props;

    const path = `/demo/restaurant/menu/items/${id}`;

    return (
        <Link to={path} className='demo-menu-item-link'>
            <div className='demo-menu-item-container'>
                <img className='demo-menu-item-img' src={image} alt={name} />
                <div className='demo-menu-item-name-container'>
                    <div className='demo-menu-item-name'>{name}</div>
                </div>
            </div>
        </Link>
    )
}

export default DemoMenuTableView;