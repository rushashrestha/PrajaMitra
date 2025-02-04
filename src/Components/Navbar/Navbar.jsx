import React from "react";
import "./Navbar.css";
import logo from "../../images/gov.png";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>PROJECT</h1>
      </div>
      <div className="navbar-right">
        <button>OUR SERVICES</button>
        <button>ABOUT US</button>
        <button>LOGIN</button>
        
      </div>
    </nav>
  );
};

export default Navbar;
