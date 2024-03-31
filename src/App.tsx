import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StyledGlobalStyles from './GlobalStyles';
import Home from './main/home/Home';
import Contact from './main/components/sections/Contact';
import Footer from './main/components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <StyledGlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
