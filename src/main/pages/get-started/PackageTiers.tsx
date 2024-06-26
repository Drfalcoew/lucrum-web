import React from 'react';
import '../Page.css';
import './GetStarted.css';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Card, Button } from 'antd';

const PackageTiers = () => {

    const nav = useNavigate();
    const isMobile = window.innerWidth < 768;

    const cards = [
        {
            title: 'Premium',
            description: `Unleash the Power of Your Brand Online and Offline!`,
            price: '$1999.00',
            details: (
                <ul>
                    <li>Website landing page</li>
                    <li>Video shorts/reels</li>
                    <li>Social media management</li>
                    <li>Comprehensive website with SEO</li>
                    <li>Engaging commercials and videos</li>
                </ul>
            )
        },
        {
            title: 'Deluxe',
            description: 'Experience Marketing Excellence at Its Finest!',
            price: '$2997.00',
            icon: 'lightning.gif',
            details: (
                <ul>
                    <li>All features of Premium</li>
                    <li>Advanced AI integration</li>
                    <li>Extended social media management</li>
                    <li>Advanced analytics</li>
                    <li>Local marketing solutions</li>
                    <li>AI integration</li>
                </ul>
            )
        }
    ];
    

    return (
        <div className='page-container-root'>
            <div className='page-title'>Choose Your Package</div>
            <div className='page-container'>
                <Row gutter={35} justify='center'>
                    {cards.map((card, index) => {
                        return (
                            <Col span={isMobile ? 24 : 11} key={index}>
                                <div className='custom-card-root-container package-card-container'>
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
                                            {/* <div className='getstarted-card-price'>{card.price}</div>
                                            <div className='getstarted-card-price-details'>per month</div> */}
                                            </div>
                                            <div className='getstarted-card-details'>
                                                {card.details}
                                            </div>
                                            <Button onClick={()=> {
                                                nav('/contact')
                                            }}
                                            type='primary' className='getstarted-card-button'>More Info</Button>
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

export default PackageTiers;