import { Button } from 'antd';
import React from 'react';

interface AboutSectionProps {
    nav: any;
    img: string;
    title: string;
    subtitle: string;
    button: string;
}


const AboutBarberSection: React.FC<AboutSectionProps> = (props: AboutSectionProps) => {

    return (
        <div className='demo-barber-page-about-container'>
            <img src={props.img} alt='About Us' className='demo-barber-page-img' />
            <div className='demo-barber-page-about-contents'>
                <h2 className='demo-barber-page-about-title'>{props.title}</h2>
                <p className='demo-barber-page-about-subtitle'>
                    {props.subtitle}
                </p>
                <Button onClick={() => props.nav('demo/menu')} type='primary' className='demo-barber-page-about-button'>{props.button}</Button>
            </div>
        </div>
    );
}

export default AboutBarberSection;
