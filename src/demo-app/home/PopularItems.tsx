import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Home.css';

const PopularItems = () => {
    const carouselRef = useRef(null); // Reference to the carousel
    const isMobile = window.innerWidth < 768;

    const items = [
        { id: 1, name: 'Double Tostada', img: 'https://www.elpolloloco.com/content/img/menu/ChickenShrimpTostada-1160x870.webp', price: 10.99 },
        { id: 2, name: 'Family Meals', img: 'https://www.elpolloloco.com/content/img/menu/menu-family-dinners_1280.webp', price: 22.99 },
        { id: 3, name: 'Double Tostada', img: 'https://www.elpolloloco.com/content/img/menu/ChickenShrimpTostada-1160x870.webp', price: 10.99 },
        { id: 4, name: 'Family Meals', img: 'https://www.elpolloloco.com/content/img/menu/menu-family-dinners_1280.webp', price: 22.99 },
        { id: 5, name: 'Double Tostada', img: 'https://www.elpolloloco.com/content/img/menu/ChickenShrimpTostada-1160x870.webp', price: 10.99 },
    ];
    

    const goToPrev = () => {
        // disable button for 1 second to prevent multiple clicks

        if (carouselRef.current) {
            (carouselRef.current as any).prev();
        }

    };

    const goToNext = () => {
        if (carouselRef.current) {
            (carouselRef.current as any).next();
        }
    };

    return (
        <div className='demo-popular-items-container'>
            <div className='demo-popular-items-arrow-container'>
                <LeftOutlined className='demo-popular-items-arrow' onClick={goToPrev} />
                <RightOutlined className='demo-popular-items-arrow' onClick={goToNext} />
            </div>
            <Carousel infinite slidesToShow={isMobile ? 1 : 3} className='demo-popular-items' ref={carouselRef} waitForAnimate>
                {items.map((item) => (
                    <Items key={item.id} name={item.name} img={item.img} price={item.price} />
                ))}
            </Carousel>
        </div>
    );
};

interface ItemProps {
    key: number;
    name: string;
    img: string;
    price: number;
}

const Items: React.FC<ItemProps> = (items: ItemProps) => {
    return (
        <div key={items.key} className='demo-popular-item'>
            <div className='demo-popular-item-img-container'>
                <img src={items.img} alt={items.name} className='demo-popular-item-img' />
            </div>
            <div className='demo-popular-item-name'>{items.name}</div>
            <div className='demo-popular-item-price'>${items.price}</div>
        </div>
    );
}

export default PopularItems;
