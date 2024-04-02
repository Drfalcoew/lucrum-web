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
import GetStarted from './main/pages/get-started/GetStarted';
import ScrollToTop from './reusable-components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <StyledGlobalStyles />
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/services" Component={Services} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/getstarted" Component={GetStarted} />
        </Routes>
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
