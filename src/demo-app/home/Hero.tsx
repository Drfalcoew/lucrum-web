import React from 'react';
import { Button, Col, Row, Carousel } from 'antd';
import './Home.css';
import '../Common.css';

const DemoHero = () => {

    const isMobile = window.innerWidth < 768;


    const heroItems = [
        {
            title: 'Demo Shop',
            subtitle: 'Welcome to the Demo Shop!',
            buttonText: 'ORDER NOW',
            image: 'https://assets.bonappetit.com/photos/61ba71c255a75f7507698f22/master/w_1600%2Cc_limit/Dame_credit_Evan%2520Sung.jpg'
        },
        {
            title: 'New Special',
            subtitle: 'Come today and try our new special!',
            buttonText: 'ORDER NOW',
            image: 'https://cdn.vox-cdn.com/thumbor/tvFmrUjJ-39fH4mYMD3TrbP-L5s=/0x0:3070x2048/1200x800/filters:focal(1290x779:1780x1269)/cdn.vox-cdn.com/uploads/chorus_image/image/72978594/Signature_Hansik________Menu_.0.jpg'
        }
    ];
    

    return (
        <div className='page-container demo-page-container'>
            <Carousel speed={500} autoplay autoplaySpeed={7500}
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
                                    <Button className='demo-hero-button' type='primary'>{item.buttonText}</Button>
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
                                    <Button className='demo-hero-button' type='primary'>{item.buttonText}</Button>
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
