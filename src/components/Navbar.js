import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <nav>
         <div className="flex-row">
            <div>
               <h4 className="Logo">Instagram</h4>
            </div>
            <div className="fill-spacer"></div>
            <div className="mg-rt">
               <button className="btn-nav">
                  <Link to="/"> Home </Link>
               </button>
               <button className="btn-nav">
                  <Link to="/profile"> Profile </Link>
               </button>
               <button className="btn-nav">
                  <Link to="/signin"> Signin </Link>
               </button>
               <button className="btn-nav">
                  <Link to="/signup"> Signup </Link>
               </button>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
