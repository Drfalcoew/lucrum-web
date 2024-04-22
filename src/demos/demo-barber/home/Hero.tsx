import React from 'react';
import { Button, Col, Row, Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import '../Common.css';

const DemoBarberHero = () => {
    
    const nav = useNavigate();

    const isMobile = window.innerWidth < 768;


    const heroItems = [
        {
            title: 'Barber Shop',
            subtitle: 'Welcome to our Barber Shop!',
            buttonText: 'Book Now',
            image: 'https://wallpapercave.com/wp/wp3067027.jpg'
        },
        {
            title: 'Barber Shop',
            subtitle: 'Welcome to our Barber Shop!',
            buttonText: 'Book Now',
            image: 'https://images.squarespace-cdn.com/content/v1/55a68174e4b086a3c2acfe59/1639940746128-0UC6H5VGD74O367PNAK5/red-sombrero-background-food.png?format=2500w'
        }
    ];
    

    return (
        <div className='page-container demo-barber-page-container'>
            <Carousel speed={500} autoplaySpeed={7500}
            className='hero-carousel'>
                {heroItems.map((item, index) => (
                    <div key={index}>
                        {isMobile ? (
                            <div className='demo-hero-mobile-container'>
                                <div className='hero-image-container'>
                                    <img className='hero-image' src={item.image} alt='placeholder' />
                                </div>
                                <div className='demo-hero-mobile-content'>
                                    <div className='demo-hero-overlay-container'>
                                        <img src='/demo/bg.webp' alt='' className='demo-hero-overlay' />
                                    </div>
                                    <h1 className='demo-barber-hero-title'>{item.title}</h1>
                                    <p className='demo-barber-hero-subtitle'>{item.subtitle}</p>
                                    <Button onClick={() => nav('/demo/menu')} className='demo-hero-button' type='primary'>{item.buttonText}</Button>
                                </div>
                            </div>
                        ) : (
                            <Row>
                                <Col span={12} className='demo-hero-col'>
                                    <div className='demo-hero-overlay-container'>
                                        <img src='/demo/bg.webp' alt='' className='demo-hero-overlay' />
                                    </div>
                                    <h1 className='demo-barber-hero-title'>{item.title}</h1>
                                    <p className='demo-barber-hero-subtitle'>{item.subtitle}</p>
                                    <Button onClick={() => nav('/demo/menu')} className='demo-hero-button' type='primary'>{item.buttonText}</Button>
                                </Col>
                                <Col span={12}>
                                    <div className='hero-image-container'>
                                        <img className='hero-image' src={item.image} alt='placeholder' />
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default DemoBarberHero;
