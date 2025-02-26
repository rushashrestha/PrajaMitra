import React from "react";
import { useNavigate } from "react-router-dom";
import "./CertificateIssuance.css";

const CertificateIssuance = () => {
  const navigate = useNavigate();

  return (
    <div className="certificate-container">
      <h2>Certificate Issuance</h2>
      <div className="certificate-options">
        <div className="certificate-card">
          <h3>Birth Certificate Issuance</h3>
          <button
            className="apply-button"
            onClick={() => navigate("/birth-certificate-form")}
          >
            Apply Now
          </button>
        </div>
        <div className="certificate-card">
          <h3>Citizenship Issuance</h3>
          <button
            className="apply-button"
            onClick={() => navigate("/citizenship-form")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default CertificateIssuance;
