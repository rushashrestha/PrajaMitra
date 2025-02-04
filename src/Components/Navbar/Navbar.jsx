import logo from "../../images/gov.png";
import React from "react";
import { Link } from "react-router-dom";
 // Import Link
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>PROJECT</h1>
      </div>
      <div className="navbar-right">
        <Link to="/services"><button>OUR SERVICES</button></Link>
        <Link to="/login"><button>LOGIN</button></Link>
        <Link to="/about"><button>ABOUT US</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
