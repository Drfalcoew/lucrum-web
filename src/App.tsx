import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StyledGlobalStyles from './GlobalStyles';
import Home from './main/pages/home/Home';
import ContactPage from './main/pages/contact/Contact';
import Contact from './main/components/sections/Contact';
import Footer from './main/components/footer/Footer';
import About from './main/pages/about/About';
import Services from './main/pages/services/Services';
import Header from './main/components/header/Header';


function App() {
  return (
    <BrowserRouter>
      <StyledGlobalStyles />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/Services" Component={Services} />
          <Route path="/Contact" Component={ContactPage} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
