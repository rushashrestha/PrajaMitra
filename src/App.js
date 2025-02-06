import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/signup/signup";
import BillPayment from "./Components/Pages/BillPayment/BillPayment";
import CertificteIssuance from "./Components/Pages/CertificateIssuance/CertificateIssuance";
import GrievanceFiling from "./Components/Pages/GrievanceFiling/GrievanceFiling";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={<Hero/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/grievance-filing" element={<GrievanceFiling/>} />
        <Route path="/certificate-issuance" element={<CertificteIssuance/>} />
        <Route path="/bill-payments" element={<BillPayment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
