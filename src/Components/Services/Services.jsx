import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services-container">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        <div className="service-card">
          <h3>GRIEVANCE FILING</h3>
        </div>
        <div className="service-card">
          <h3>CERTIFICATE ISSUANCE</h3>
        </div>
        <div className="service-card">
          <h3>BILL PAYMENTS</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
