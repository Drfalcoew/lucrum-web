import React from 'react';
import { Col, Row, Card } from 'antd';
import './Sections.css'

const About = () => {

    const title = 'We are an Advertising & Marketing firm erat sed fermentum.';

    const description = 'We are a team of passionate creators and innovators dedicated to helping businesses thrive in the digital age.';// Our mission is to provide cutting-edge solutions that empower our clients to achieve their goals and make a lasting impact in their industries.';

    return (
        <div className='about-root-container'>
            <div className='about-container'>
                <Row gutter={15}>
                    <Col span={12}>
                    <Card
                        className='about-us-card'
                    >
                        <Card.Meta
                        title={<div className='custom-card-title about-us-card-title'>{title}</div>}
                        />
                        <div className='custom-card-description'>{description}</div>
                        <div className='custom-card-footer'>Learn More</div>
                    </Card>
                    </Col>
                    <Col span={12}>
                        <div className='about-image-container'>
                            <img className='about-image' src='digital_marketing.webp' alt='lucrumweb digital advertising and marketing' />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default About;