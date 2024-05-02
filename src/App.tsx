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
import DemoHome from './demos/demo-restaurant/home/Home';
import DemoAbout from './demos/demo-restaurant/about/About';
import DemoHeader from './demos/demo-restaurant/header/Header';
import DemoFooter from './demos/demo-restaurant/footer/Footer';
import DemoMenu from './demos/demo-restaurant/menu/Menu';
import Items, { ItemProps } from './demos/demo-restaurant/items/Items';
import DemoBarberHome from './demos/demo-barber/home/Home';
import DemoBarberFooter from './demos/demo-barber/footer/Footer';
import DemoBarberHeader from './demos/demo-barber/header/Header';
import Profile from './main/components/profiles/Profile';


function App() {

  const [appointmentData, setAppointmentData] = React.useState<null | SchedulePropsData>(null);

  const handleAppointmentScheduled = (data: SchedulePropsData) => {
    setAppointmentData(data);
  };

  const items: ItemProps[] = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Double Chicken Tostada Salad ',
      description: 'Description for item 1',
      category: 'Salads',
      price: 10
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Double Chicken Tostada Salad ',
      description: 'Description for item 2',
      category: 'Burritos',
      price: 20
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Double Chicken Tostada Salad ',
      description: 'Description for item 3',
      category: 'Tacos',
      price: 30
    }
  ];

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
                  <Route path="/profile/:id" element={<Profile />} />
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
          
          {/* Routes for demo restaurant site */}
          <Route
            path="/demo/restaurant/*"
            element={
              <>
                <DemoHeader />
                <Routes>
                  <Route path="/" element={<DemoHome />} />
                  <Route path="/about" element={<DemoAbout />} />
                  <Route path="/menu" element={<DemoMenu />} />
                  <Route path="/menu/items/*" element={<Items items={items}/>} />
                </Routes>
                <DemoFooter />
              </>
            }
          />

        {/* Routes for demo restaurant site */}
        <Route
            path="/demo/barbershop/*"
            element={
              <>
                <DemoBarberHeader />
                <Routes>
                  <Route path="/" element={<DemoBarberHome />} />
                  <Route path="/about" element={<DemoAbout />} />
                </Routes>
                <DemoBarberFooter />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
