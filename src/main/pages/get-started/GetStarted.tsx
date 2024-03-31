import React from 'react';
import '../Page.css';
import './GetStarted.css';
import { Row, Col, Card } from 'antd';

const GetStarted = () => {

    const cards = [
        {
            title: 'Standard',
            description: 'Get started with Lucrum today!',
            icon: 'laurel.png'
        },
        {
            title: 'Premium',
            description: 'Get started with Lucrum today!',
            icon: 'laurel.png'
        },
        {
            title: 'Deluxe',
            description: 'Get started with Lucrum today!',
            icon: 'laurel.png'
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
                                        title={card.title}
                                        className='getstarted-card-container'
                                    >
                                        <Card.Meta
                                            description={card.description}
                                        />
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