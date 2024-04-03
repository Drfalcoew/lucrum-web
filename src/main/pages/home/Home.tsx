import React from 'react';
import Hero from '../../components/hero/Hero';
import Services from '../../components/sections/Services';
import About from '../../components/sections/About';
import './Home.css';


const Home = () => {
    return (
        <>
            <img className='Background-image' src='ethereal_0.webp' alt='google logo' />
            <header className="App-content">
                <Hero />
            </header>
            <Services />
            <About />
        </>
    );
}

export default Home;