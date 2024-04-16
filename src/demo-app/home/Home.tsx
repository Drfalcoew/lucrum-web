import React from 'react';
import DemoHero from './Hero';
import PopularItems from './PopularItems';
import AboutSection from './AboutSection';
import { useNavigate } from 'react-router-dom';

const DemoHome = () => {

    const navigate = useNavigate();

    const nav = (path: string) => {
        if (window.location.pathname === `/${path}/`) {
            return;
        }
        navigate(`/${path}/`);
    }

    const aboutProps = [
        {
            img: 'https://www.elpolloloco.com/content/img/our-food_1280.webp',
            title: 'OUR FOOD',
            subtitle: 'We are a Mexican restaurant that serves delicious and authentic Mexican food. Our food is made with fresh ingredients and cooked to perfection.',
            button: 'View Menu'
        },
        {
            img: 'https://www.elpolloloco.com/content/img/order-now_1280.webp',
            title: 'Order online for quick pick up or delivery where available.',
            subtitle: 'We are a Mexican restaurant that serves delicious and authentic Mexican food. Our food is made with fresh ingredients and cooked to perfection.',
            button: 'Order Now'
        }
    ]

    return (
        <div className='page-container-root hero-container-root'>
            <DemoHero />
            <AboutSection nav={nav} img={aboutProps[0].img} title={aboutProps[0].title} subtitle={aboutProps[0].subtitle} button={aboutProps[0].button} />
            <PopularItems />
            <AboutSection nav={nav} img={aboutProps[1].img} title={aboutProps[1].title} subtitle={aboutProps[1].subtitle} button={aboutProps[1].button} />
        </div>
    );
}

export default DemoHome;