import React, { useState } from "react";
import './LoginPopup.css';

const LoginPopup = ({setshowLogin}) => {
  const [currState, setcurrState] = useState("Login");
   
  return (
    <div className="LoginPopup">
      <form className="LoginPopup-Container">
        <div className="LoginPopup-title">
          <h2>{currState}</h2>
          <i onClick={() => setshowLogin(false)} className="fa-solid fa-xmark"></i>
        </div>
        <div className="Login-popup-inputs">
              {currState !== "Login" && (
                <input type="text" placeholder="Your Name" required />
              )}
              <input type="email" placeholder="Your email" required />
              <input type="password" placeholder="Password" required />
        </div>
        <button type="button">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
