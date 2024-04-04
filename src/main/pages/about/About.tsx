import React from 'react';
import { Col, Row } from 'antd';
import '../Page.css';
import './About.css';

const About = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <div className='page-container-root about-page-container-root'>
                <div className='page-container about-page-container'>
                    <Row>
                        <Col span={isMobile ? 24 : 12}>
                            <div className='about-image-container'>
                                <img className='about-page-image' src='about/about_us_office.png' alt='advertising marketing agency meeting' />
                            </div>
                        </Col>
                        <Col span={isMobile ? 24 : 12}>
                            <div className='about-details-container'>
                                <h1>Who We Are</h1>
                                <p>We are a small team of creative professsionals who are based in California. We specialize in digital marketing, social media marketing, and web design. Our team is passionate about helping businesses grow and succeed. We work with clients of all sizes, from small businesses to large corporations.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='about-section-container'>
                <div className='page-container about-page-container'>
                    <Row>
                    {isMobile ? (
                            <>
                                <Col span={24}>
                                    <div className='about-image-container'>
                                        <img className='about-page-image' src='about/digital_marketing_2.webp' alt='advertising marketing agency meeting' />
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className='about-details-container'>
                                        <h1>Our Mission</h1>
                                        <p>Our goal is to substantially increase your monthly revenue and help you grow your business. We are dedicated to providing our clients with the tools and strategies to reach their target audience more effectively and grow their business.</p>
                                    </div>
                                </Col>
                            </>
                        ) : (
                            <>
                                <Col span={12}>
                                    <div className='about-details-container'>
                                        <h1>Our Mission</h1>
                                        <p>Our goal is to substantially increase your monthly revenue and help you grow your business. We are dedicated to providing our clients with the tools and strategies to reach their target audience more effectively and grow their business.</p>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className='about-image-container'>
                                        <img className='about-page-image' src='about/digital_marketing_2.webp' alt='advertising marketing agency meeting' />
                                    </div>
                                </Col>
                            </>
                        )}                    </Row>
                </div>
            </div>
            <div className='about-section-container'>
                <div className='page-container about-page-container'>
                    <Row>
                    <Col span={isMobile ? 24 : 12}>
                            <div className='about-image-container'>
                                <img className='about-page-image' src='about/services.webp' alt='advertising marketing agency meeting' />
                            </div>
                        </Col>
                        <Col span={isMobile ? 24 : 12}>
                            <div className='about-details-container'>
                                <h1>Our Services</h1>
                                <p>We offer a wide range of services to help you grow your business. Our services include digital marketing, social media marketing, web design, and more. We work with clients of all sizes, from small businesses to large corporations.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}

export default About;