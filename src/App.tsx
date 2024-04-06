import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
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
import { SchedulePropsData } from './Types';
import Success from './main/pages/success/Success';


function App() {

  const [appointmentData, setAppointmentData] = React.useState<null | SchedulePropsData>(null);

  const handleAppointmentScheduled = (data: SchedulePropsData) => {
    setAppointmentData(data);
  };

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
          <Route path="/contact" element={<ContactPage onAppointmentScheduled={handleAppointmentScheduled} />} />
          <Route path="/getstarted" Component={GetStarted} />
          {appointmentData ? (
            <Route
              path="/success"
              element={<Success fullName={appointmentData.fullName} orderNumber={appointmentData.orderNumber} email={appointmentData.email} />}
            />
          ) : (
            <Route path="/success" element={<Navigate to="/schedule" />} />
          )}
        </Routes>
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
