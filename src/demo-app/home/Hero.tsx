import React from 'react';
import { Button, Col, Row, Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import '../Common.css';

const DemoHero = () => {
    
    const nav = useNavigate();

    const isMobile = window.innerWidth < 768;


    const heroItems = [
        {
            title: 'El Charro',
            subtitle: 'Welcome to El Charro!',
            buttonText: 'View Menu',
            image: 'https://www.azamara.com/static-assets/images/blogs/Blog_Preparing%20Authentic%20Mexican%20Meal.jpg'
        },
        {
            title: 'New Special',
            subtitle: 'Come today and try our new special!',
            buttonText: 'View Menu',
            image: 'https://images.squarespace-cdn.com/content/v1/55a68174e4b086a3c2acfe59/1639940746128-0UC6H5VGD74O367PNAK5/red-sombrero-background-food.png?format=2500w'
        }
    ];
    

    return (
        <div className='page-container demo-page-container'>
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
                                    <h1 className='demo-hero-title'>{item.title}</h1>
                                    <p className='demo-hero-subtitle'>{item.subtitle}</p>
                                    <Button onClick={() => nav('/demo/menu')} className='demo-hero-button' type='primary'>{item.buttonText}</Button>
                                </div>
                            </div>
                        ) : (
                            <Row>
                                <Col span={12} className='demo-hero-col'>
                                    <div className='demo-hero-overlay-container'>
                                        <img src='/demo/bg.webp' alt='' className='demo-hero-overlay' />
                                    </div>
                                    <h1 className='demo-hero-title'>{item.title}</h1>
                                    <p className='demo-hero-subtitle'>{item.subtitle}</p>
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

export default DemoHero;
