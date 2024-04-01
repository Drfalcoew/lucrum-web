import React from 'react';
import '../Page.css';
import './GetStarted.css';
import { Row, Col, Card, Button } from 'antd';

const GetStarted = () => {

    const cards = [
        {
            title: 'Standard',
            description: `Unleash the Power of Your Brand Online and Offline!`,
            price: '$349.00',
            details: (
                <ul>
                    <li>Website landing page</li>
                    <li>Video shorts/reels</li>
                    <li>Traditional advertising (flyers, posters)</li>
                    <li>Social media management</li>
                </ul>
            )
        },
        {
            title: 'Premium',
            description: 'Elevate Your Brand\'s Presence with Premium Marketing Solutions!',
            price: '$499.00',
            details: (
                <ul>
                    <li>All features of Standard</li>
                    <li>Comprehensive website with SEO</li>
                    <li>Engaging commercials and videos</li>
                    <li>AI integration</li>
                </ul>
            )
        },
        {
            title: 'Deluxe',
            description: 'Experience Marketing Excellence at Its Finest!',
            price: '$699.00',
            icon: 'lightning.gif',
            details: (
                <ul>
                    <li>All features of Premium</li>
                    <li>Advanced AI integration</li>
                    <li>Extended social media management</li>
                    <li>Advanced analytics</li>
                    <li>Custom marketing solutions</li>
                </ul>
            )
        }
    ];
    

    return (
        <div className='page-container-root'>
            <div className='page-container'>
                <Row gutter={15} justify='center'>
                    {cards.map((card, index) => {
                        return (
                            <Col span={8} key={index}>
                                <div className='custom-card-root-container'>
                                    <Card
                                        style={{ backgroundColor: index % 2 === 1 ? 'rgba(35,35,35, 0.8)' : 'rgba(49,49,49, 0.8)' }}
                                        className='getstarted-card'
                                    >
                                        <Card.Meta
                                            title={<div className='getstarted-card-title'>{card.title}</div>}
                                            avatar={<img className='getstarted-card-icon' alt='' src={card.icon} />}
                                        />
                                        <div className='getstarted-card-description'>{card.description}</div>
                                        <div className='getstarted-card-content'>
                                            <div className='getstarted-price-container'>
                                                <div className='getstarted-card-price'>{card.price}</div>
                                                <div className='getstarted-card-price-details'>per month</div>
                                            </div>
                                            <div className='getstarted-card-details'>
                                                {card.details}
                                            </div>
                                            <Button type='primary' className='getstarted-card-button'>Get Started</Button>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        )}
                    )}
                </Row>
            </div>
        </div>
    );
}

export default GetStarted;