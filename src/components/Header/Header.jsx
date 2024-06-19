import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigateToForm = useNavigate();
    return(
      <div className="Header">
        <div className="Header-contents">
            <h2 >We care</h2>
            <h2>about your health</h2>
            <p>Good health is the state if mental ,physical and social well being and it does not just mean absence of disease</p>
            {/*<Link to={"/BookAppointment"}><button>Book an Appointment</button></Link>
             <button onClick={()=> navigateToForm("/BookAppointment")}>
               <span class="text" >Appointment</span>
               <span class="blob"></span>
               <span class="blob"></span>
               <span class="blob"></span>
               <span class="blob"></span>
             </button>*/}
             <button class="btn" onClick={()=> navigateToForm("/BookAppointment")}>Appointment</button>
        </div>  
      </div>
    )
}

export default Header