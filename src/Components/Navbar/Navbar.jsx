import logo from "../../images/gov.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleScroll = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <a href="/" className="navbar-brand">
          <h1>प्रजा MITRA</h1>
        </a>
      </div>
      <div className="navbar-right">
        <button onClick={() => handleScroll("services")}>OUR SERVICES</button>
        <button onClick={() => handleScroll("about")}>ABOUT US</button>
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
