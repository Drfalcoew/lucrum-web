import { Button } from 'antd';
import React from 'react';

interface AboutSectionProps {
    nav: any;
    img: string;
    title: string;
    subtitle: string;
    button: string;
}


const AboutSection: React.FC<AboutSectionProps> = (props: AboutSectionProps) => {

    return (
        <div className='demo-page-about-container'>
            <img src={props.img} alt='About Us' className='demo-page-img' />
            <div className='demo-page-about-contents'>
                <h2 className='demo-page-about-title'>{props.title}</h2>
                <p className='demo-page-about-subtitle'>
                    {props.subtitle}
                </p>
                <Button onClick={() => props.nav('demo/restaurant/menu')} type='primary' className='demo-page-about-button'>{props.button}</Button>
            </div>
        </div>
    );
}

export default AboutSection;
