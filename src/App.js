import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Home from "./Components/Pages/Home";
<<<<<<< HEAD
import Footer from "./Components/Footer/Footer";
=======
import Signup from "./Components/signup/signup";
>>>>>>> 7e57db4b6f59ee2b4a4d8ad4e5cb40f0495c1c8a


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
