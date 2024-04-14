import React from 'react';
import { Button, Col, Row, Carousel } from 'antd';
import './Home.css';
import '../Common.css';

const DemoHero = () => {
    return (
        <div className='page-container demo-page-container'>
            <Carousel speed={500} autoplay autoplaySpeed={7500} fade={true}
            className='hero-carousel'>
                {/* First Carousel Item */}
                <div>
                    <Row>
                        <Col span={12} className='demo-hero-col'>
                            <div className='demo-hero-overlay-container'>
                                <img src='/demo/bg.webp' alt=''
                                    className='demo-hero-overlay' />
                            </div>
                                <h1 className='demo-hero-title'>Demo Shop</h1>
                                <p className='demo-hero-subtitle'>
                                    Welcome to the Demo Shop!
                                </p>
                                <Button className='demo-hero-button' type='primary'>
                                    ORDER NOW
                                </Button>
                            </Col>
                        <Col span={12}>
                            <div className='hero-image-container'>
                                <img className='hero-image'
                                    src='https://assets.bonappetit.com/photos/61ba71c255a75f7507698f22/master/w_1600%2Cc_limit/Dame_credit_Evan%2520Sung.jpg'
                                    alt='placeholder' />
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* Second Carousel Item (Add more items as needed) */}
                <div>
                    <Row>
                        <Col span={12} className='demo-hero-col'>
                            <div className='demo-hero-overlay-container'>
                                <img src='/demo/bg.webp' alt=''
                                    className='demo-hero-overlay' />
                            </div>
                            <h1 className='demo-hero-title'>New Special</h1>
                            <p className='demo-hero-subtitle'>
                                Come today and try our new special!
                            </p>
                            <Button className='demo-hero-button' type='primary'>
                                ORDER NOW
                            </Button>
                        </Col>
                        <Col span={12}>
                            <div className='hero-image-container'>
                                <img className='hero-image'
                                    src='https://cdn.vox-cdn.com/thumbor/tvFmrUjJ-39fH4mYMD3TrbP-L5s=/0x0:3070x2048/1200x800/filters:focal(1290x779:1780x1269)/cdn.vox-cdn.com/uploads/chorus_image/image/72978594/Signature_Hansik________Menu_.0.jpg'
                                    alt='placeholder' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Carousel>
        </div>
    );
}

export default DemoHero;
