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
import FormDisplay from "./Components/Pages/CertificateIssuance/FormDisplay";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/grievance-filing" element={<GrievanceFiling />} />
        <Route path="/certificate-issuance" element={<CertificteIssuance />} />
        <Route path="/bill-payments" element={<BillPayment />} />
        <Route
          path="/citizenship-form"
          element={<FormDisplay isCitizenship={true} />}
        />
        <Route path="/birth-certificate-form" element={<FormDisplay />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
