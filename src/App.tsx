import React from 'react';
import './App.css';
import Hero from './main/hero/Hero';
import Services from './main/sections/Services';

function App() {
  return (
    <div className="App">
      <img className='Background-image' src='ethereal_0.webp' alt='google logo' />
      <header className="App-content">
        <Hero />
      </header>
      <Services />
    </div>
  );
}

export default App;
