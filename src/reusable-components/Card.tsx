import React from 'react';
import { Card } from "antd";
import './ReusableComponents.css';

const CustomCard = (props: any) => {
    return (
        <div className='custom-card-root-container'>
            <Card
                hoverable
                className='custom-card'
            >
                <Card.Meta
                title={<div className='custom-card-title'>{props.title}</div>}
                // description={<div className='custom-card-description'>{props.description}</div>}
                avatar={<div className='custom-card-icon'>{props.icon}</div>}
                />
                <div className='custom-card-index'>0{props.index + 1}</div>
                <div className='custom-card-description'>{props.description}</div>
                <div className='custom-card-footer'>Learn More</div>
            </Card>
        </div>
    );
}

export default CustomCard;