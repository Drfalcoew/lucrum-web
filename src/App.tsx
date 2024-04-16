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
import DemoHome from './demo-app/home/Home';
import DemoAbout from './demo-app/about/About';
import DemoHeader from './demo-app/header/Header';
import DemoFooter from './demo-app/footer/Footer';
import DemoMenu from './demo-app/menu/Menu';


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
        <Routes>
          {/* Routes for main site */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<ContactPage onAppointmentScheduled={handleAppointmentScheduled} />} />
                  <Route path="/getstarted" element={<GetStarted />} />
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
              </>
            }
          />
          
          {/* Routes for demo site */}
          <Route
            path="/demo/*"
            element={
              <>
                <DemoHeader />
                <Routes>
                  <Route path="/" element={<DemoHome />} />
                  <Route path="/about" element={<DemoAbout />} />
                  <Route path="/menu" element={<DemoMenu />} />
                </Routes>
                <DemoFooter />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
