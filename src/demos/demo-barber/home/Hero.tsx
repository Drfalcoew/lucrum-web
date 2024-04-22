import React from 'react';
import { Button, Col, Row, Carousel } from 'antd';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import '../Common.css';

const DemoBarberHero = () => {
    
    // const nav = useNavigate();

    const isMobile = window.innerWidth < 768;


    const heroItems = [
        {
            title: 'Barber Shop',
            subtitle: 'Freshest cuts in town.',
            buttonText: 'Book Now',
            image: 'https://wallpapercave.com/wp/wp3067027.jpg'
        },
        {
            title: 'Barber Shop',
            subtitle: 'Freshest cuts in town.',
            buttonText: 'Book Now',
            image: 'https://heygoldie.com/blog/wp-content/uploads/2021/08/vintage-barbershop-decoration-idea-1024x683.jpg'
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
                                    <Button className='demo-barber-hero-button' type='primary'>{item.buttonText}</Button>
                                </div>
                            </div>
                        ) : (
                            <Row>
                                <Col span={12} className='demo-hero-col'>
                                    <div className='demo-hero-overlay-container'>
                                        <img src='/' alt='' className='demo-hero-overlay' />
                                    </div>
                                    <h1 className='demo-barber-hero-title'>{item.title}</h1>
                                    <p className='demo-barber-hero-subtitle'>{item.subtitle}</p>
                                    <Button className='demo-barber-hero-button' type='primary'>{item.buttonText}</Button>
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
