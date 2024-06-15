import {React,useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route ,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart';
import BookAppointment from './pages/BookAppointment/BookAppointment';
import Footer from './components/Footer/Footer';
import './App.css';
import LoginPopup from './components/LoginPopup/LoginPopup';
// import Logintype from './components/LoginPopup/Logintype';
const App = () => {
  const [showLogin,setshowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/Cart" element={<Cart/>}/> */}
          <Route path="/BookAppointment" element={<BookAppointment/>}/>
        </Routes>
      </div>
      <Footer/>
      </>
    )
}
 
export default App;
