import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import BookAppointment from './pages/BookAppointment/BookAppointment';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import './App.css';

const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  const location = useLocation();

  return (
    <>
      {showLogin && <LoginPopup setshowLogin={setshowLogin} />}
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookAppointment" element={<BookAppointment />} />
        </Routes>
      </div>
      {location.pathname !== '/BookAppointment' && <Footer />}
    </>
  );
}

export default App;
