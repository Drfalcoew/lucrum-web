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
        <div className='demo-barber-page-about-container-root'>
            <div className='demo-barber-page-about-container'>
                <h2 className='demo-barber-page-about-title'>{props.title}</h2>
                <div className='demo-barber-page-about-contents-root'> 
                    <div className='demo-barber-page-image-container'>
                        <img src={props.img} alt='About Us' className='demo-barber-page-img' />
                    </div>
                    <div className='demo-barber-page-about-contents'>
                        <p className='demo-barber-page-about-subtitle'>
                            {props.subtitle}
                        </p>
                        <Button type='primary' className='demo-barber-page-about-button'>{props.button}</Button>
                    </div>
                    <div className='demo-barber-page-image-container'>
                        <img src='https://static01.nyt.com/images/2023/05/21/multimedia/00CelebrityBarbers-JP1/00CelebrityBarbers-lede-try-btcf-mediumSquareAt3X.jpg' alt='About Us' className='demo-barber-page-img' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBarberSection;
