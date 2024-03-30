import React from 'react';
import './App.css';
import Hero from './main/hero/Hero';

function App() {
  return (
    <div className="App">
      <img className='Background-image' src='ethereal_0.webp' alt='google logo' />
      <header className="App-content">
        <Hero />
      </header>
      
    </div>
  );
}

export default App;
