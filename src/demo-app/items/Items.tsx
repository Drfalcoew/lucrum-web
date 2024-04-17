import React from 'react';
import './Items.css';

export interface ItemsProps {
    image: string;
    title: string;
    description: string;
    category?: string;
    price?: number;
}

const Items: React.FC<{ items: ItemProps[] }> = ({ items }) => {

  return (
    <div className='items-root-container'>
        <img className='items-top-ribbon' src='https://www.elpolloloco.com/content/img/hero/Tiles_2.png' alt=''/>
        <h1 className='items-category-title'>{items[0].category}</h1>
        <div className='items-container'>
            {items.map((item) => (
                <Item key={item.title} image={item.image} title={item.title} description={item.description} price={item.price} />
            ))}
        </div>
    </div>
  );
};

export default Items;

interface ItemProps {
    image: string;
    title: string;
    description: string;
    price?: number;
    category?: string;
}

const Item : React.FC<ItemProps> = (items: ItemProps) => {
    return (
        <div className='demo-item-container'>
            <img className='demo-item-img' src={'https://www.elpolloloco.com/content/img/menu/M3-DblChickenTostada-761x561.webp'}
             alt={items.title} />
            <div className='demo-item-name-container'>
                <div className='demo-item-name'>{items.title}</div>
            </div>
        </div>
    );
}