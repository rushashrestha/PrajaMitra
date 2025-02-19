import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import { auth } from "../../firebase/firebase";

const Services = () => {
  const navigate = useNavigate();

  // Generic function to handle service navigation
  const handleServiceNavigation = async (service) => {
    try {
      const user = auth.currentUser; // Get the current logged-in user

      if (!user) {
        navigate("/login");
        return;
      }

      console.log("User:", user);

      // Navigate to the appropriate page based on the service
      if (service === "grievance") {
        navigate("/grievance-filing");
      } else if (service === "certificate") {
        navigate("/certificate-issuance");
      } else if (service === "bill") {
        navigate("/bill-payments");
      }

      console.log(`${service.charAt(0).toUpperCase() + service.slice(1)} form successfully navigated!`);
   
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div id="services" className="services-container">
      <h2 className="services-title">OUR SERVICES</h2>
      <div className="services-grid">
        <div onClick={() => handleServiceNavigation("grievance")} className="service-card">
          <h3>GRIEVANCE FILING</h3>
        </div>
        <div onClick={() => handleServiceNavigation("certificate")} className="service-card">
          <h3>CERTIFICATE ISSUANCE</h3>
        </div>
        <div onClick={() => handleServiceNavigation("bill")} className="service-card">          
          <h3>BILL PAYMENTS</h3>          
        </div>
      </div>
    </div>
  );
};

export default Services;
