import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import './Home.css';

const PopularItemsBarber = () => {
    const carouselRef = useRef(null); // Reference to the carousel
    const isMobile = window.innerWidth < 768;

    const items = [
        { id: 1, name: 'Johnny Cumacho', img: 'https://img.freepik.com/premium-photo/handsome-barber-isolated_115919-34796.jpg', action: 'Book Now' },
        { id: 2, name: 'Ralph Soprano', img: 'https://img.freepik.com/premium-photo/handsome-barber-isolated_115919-34796.jpg', action: 'Book Now' },
        { id: 3, name: 'David Benchester', img: 'https://img.freepik.com/premium-photo/handsome-barber-isolated_115919-34796.jpg', action: 'Book Now' },
        { id: 4, name: 'Romeo Signet', img: 'https://img.freepik.com/premium-photo/handsome-barber-isolated_115919-34796.jpg', action: 'Book Now' },
        { id: 5, name: 'Larry Bradfield', img: 'https://img.freepik.com/premium-photo/handsome-barber-isolated_115919-34796.jpg', action: 'Book Now' },
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
            <Carousel infinite slidesToShow={isMobile ? 1 : 3} className='demo-barber-popular-items' ref={carouselRef} waitForAnimate>
                {items.map((item) => (
                    <Items key={item.id} name={item.name} img={item.img} action={item.action} />
                ))}
            </Carousel>
        </div>
    );
};

interface ItemProps {
    key: number;
    name: string;
    img: string;
    action: string;
}

const Items: React.FC<ItemProps> = (items: ItemProps) => {
    return (
        <div key={items.key} className='demo-barber-popular-item'>
            <div className='demo-barber-popular-item-img-container'>
                <img src={items.img} alt={items.name} className='demo-barber-popular-item-img' />
            </div>
            <div className='demo-popular-item-name'>{items.name}</div>
            <div className='demo-popular-item-price'>{items.action}</div>
        </div>
    );
}

export default PopularItemsBarber;
