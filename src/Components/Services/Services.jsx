import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services-container">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        <div className="service-card">
          <Link to="/grievance-filing">
            <h3>GRIEVANCE FILING</h3>
          </Link>
        </div>
        <div className="service-card">
          <Link to="/certificate-issuance">
            <h3>CERTIFICATE ISSUANCE</h3>
          </Link>
        </div>
        <div className="service-card">
          <Link to="/bill-payments">
            <h3>BILL PAYMENTS</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
