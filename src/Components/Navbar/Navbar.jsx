import logo from "../../images/gov.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Navbar = () => {
  const user = auth.currentUser;
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

  const handleLogout= async() =>{
    try {
      await signOut(auth);
      console.log("User Logged Out Successfully.");
      navigate("/");
    } catch (error) {
      
    }
  }

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
        {!user && <button>LOGIN</button>}
        </Link>
       {user && <button onClick={handleLogout}>LOGOUT</button>}
      </div>
    </nav>
  );
};

export default Navbar;
