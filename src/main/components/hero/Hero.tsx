import './Hero.css';
import { Button } from "antd";


const Hero = () => {
    // animate letter by letter
    const title = 'LucrumWeb'.split('').map((letter, index) => {
      return (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {letter}
        </span>
      );
    });
  
    return (
      <div className='hero-container'>
        <div className='title-container-root'>
            <div className='black-overlay'></div>
            <div className='title-container'>
                <div className='hero-subtitle'>Welcome to</div>
                <div className='hero-title'>{title}</div>
                <Button className='hero-button' type='primary' size='large'>Get Started Now</Button>
            </div>
        </div>
      </div>
    );
  };

export default Hero;