import React from 'react';
import DemoHero from './Hero';
import PopularItems from './PopularItems';
import AboutSection from './AboutSection';

const DemoHome = () => {

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
            <AboutSection img={aboutProps[0].img} title={aboutProps[0].title} subtitle={aboutProps[0].subtitle} button={aboutProps[0].button} />
            <PopularItems />
            <AboutSection img={aboutProps[1].img} title={aboutProps[1].title} subtitle={aboutProps[1].subtitle} button={aboutProps[1].button} />
        </div>
    );
}

export default DemoHome;