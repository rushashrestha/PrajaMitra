import logo from "../../images/gov.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  // Import Link
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollToServices = () => {
    if (window.location.pathname !== "/") {
      navigate("/"); // Ensure we are on the home page first
      setTimeout(() => {
        document.getElementById("services").scrollIntoView({ behavior: "smooth" });
      }, 500); // Delay to ensure home page loads first
    } else {
      document.getElementById("services").scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Egovernance</h1>
      </div>
      <div className="navbar-right">
      <button onClick={handleScrollToServices}>OUR SERVICES</button>
        <Link to="/login"><button>LOGIN</button></Link>
        <Link to="/about"><button>ABOUT US</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
