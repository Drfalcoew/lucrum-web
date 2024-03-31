import React from 'react';
import { Card } from "antd";
import './ReusableComponents.css';
import { Link } from 'react-router-dom';

const CustomCard = (props: any) => {
    return (
        <div className='custom-card-root-container'>
            <Link to={props.link} className='custom-card-link'>
                <Card
                    hoverable
                    
                    className='custom-card'
                    style={{ backgroundColor: props.index % 2 === 0 ? 'rgba(240,240,240, 0.9)' : 'rgba(249,249,249, 0.9)' }}
                >
                    <Card.Meta
                    title={<div style={{fontSize: props.titleSize + 'em'}} className='custom-card-title'>{props.title}</div>}
                    avatar={<div className='custom-card-icon'>{props.icon}</div>}
                    />
                    <div style={{display: props.index === null ? 'none' : 'block'}} className='custom-card-index'>0{props.index + 1}</div>
                    <div className='custom-card-description'>{props.description}</div>
                    <div className='custom-card-footer'>Learn More</div>
                </Card>
            </Link>
        </div>
    );
}

export default CustomCard;