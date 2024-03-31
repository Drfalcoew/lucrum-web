import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StyledGlobalStyles from './GlobalStyles';
import Home from './main/home/Home';

function App() {
  return (
    <BrowserRouter>
      <StyledGlobalStyles />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
