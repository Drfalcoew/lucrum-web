import React from 'react';
import { Col, Row, Card } from 'antd';
import './Sections.css'
import { Link } from 'react-router-dom';

const About = () => {
    const isMobile = window.innerWidth < 520;

    const title = 'We are an Advertising & Marketing firm that specializes in growing your business online and offline.';

    const description = 'We take care of all your advertising and marketing needs so you can focus on providing the best products and services to your customers.';

    return (
        <div className='about-root-container'>
            <div className='about-container'>
                <Row gutter={15}>
                    <Col span={isMobile ? 24 : 12}>
                    <Card
                        className='about-us-card'
                    >
                        <Card.Meta
                        title={<div className='custom-card-title about-us-card-title'>{title}</div>}
                        />
                        <div className='custom-card-description'>{description}</div>
                        <Link to={'/about'} className='custom-card-footer'>Learn More</Link>
                    </Card>
                    </Col>
                    <Col span={isMobile ? 24 : 12}>
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