import React from 'react';
import DemoHero from './Hero';
import PopularItems from './PopularItems';
import AboutSection from './AboutSection';
import { useNavigate } from 'react-router-dom';

const DemoBarberHome = () => {

    const navigate = useNavigate();

    const isMobile = window.innerWidth < 768;

    const nav = (path: string) => {
        if (window.location.pathname === `/${path}/`) {
            return;
        }
        navigate(`/${path}/`);
    }

    const aboutProps = [
        {
            img: 'https://www.elpolloloco.com/content/img/our-food_1280.webp',
            title: 'Our Barbers',
            subtitle: 'We are a local barber shop that offers a variety of services to meet your needs. Our barbers are experienced and skilled in their craft, and they are dedicated to providing you with the best service possible.',
            button: 'Book Now'
        },
        {
            img: isMobile ? 'https://www.pngitem.com/pimgs/m/564-5646353_barber-chair-png-koken-legacy-barber-chair-transparent.png' : 'barber-shop.webp',
            title: 'Our Services',
            subtitle: 'We are a local barber shop that offers a variety of services to meet your needs. Our barbers are experienced and skilled in their craft, and they are dedicated to providing you with the best service possible.',
            button: 'Book Now'
        }
    ]

    return (
        <div className='page-container-root hero-container-root'>
            <DemoHero />
            <PopularItems />
            <AboutSection nav={nav} img={aboutProps[1].img} title={aboutProps[1].title} subtitle={aboutProps[1].subtitle} button={aboutProps[1].button} />
        </div>
    );
}

export default DemoBarberHome;