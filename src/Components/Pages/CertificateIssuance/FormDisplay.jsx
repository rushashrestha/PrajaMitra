import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./FormDisplay.css";

const FormDisplay = (props) => {
  const { isCitizenship } = props;
  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);
  //   const type = searchParams.get("type");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    fatherName: "",
    motherName: "",
    citizenship: "",
    address: "",
    regDate: "",
    visitDate: "",
    submitted: false,
    appNumber: "",
    photo: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    setFormData({ ...formData, photo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      submitted: true,
      appNumber: Math.floor(100000 + Math.random() * 900000),
    });
  };

  return (
    <div className="form-display">
      <div className="container">
        {!formData.submitted ? (
          <form onSubmit={handleSubmit} className="form-container">
            <h2>
              {isCitizenship
                ? "Citizen Registration Issuance"
                : "Birth Registration Issuance"}
            </h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Father’s Name</label>
              <input
                type="text"
                name="fatherName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mother’s Name</label>
              <input
                type="text"
                name="motherName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Citizenship No.</label>
              <input
                type="text"
                name="citizenship"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Registration</label>
              <input
                type="date"
                name="regDate"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Select Visit Date</label>
              <input
                type="date"
                name="visitDate"
                onChange={handleChange}
                required
              />
            </div>
            {isCitizenship && (
              <div className="form-group">
                <label>Upload Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  required
                />
              </div>
            )}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <div className="application-container">
            <h2>Application Receipt</h2>
            <p>
              <strong>Application Number:</strong> {formData.appNumber}
            </p>
            <p>
              <strong>Full Name:</strong> {formData.firstName}{" "}
              {formData.lastName}
            </p>
            <p>
              <strong>Date of Birth:</strong> {formData.dob}
            </p>
            <p>
              <strong>Father’s Name:</strong> {formData.fatherName}
            </p>
            <p>
              <strong>Mother’s Name:</strong> {formData.motherName}
            </p>
            <p>
              <strong>Citizenship No.:</strong> {formData.citizenship}
            </p>
            <p>
              <strong>Address:</strong> {formData.address}
            </p>
            <p>
              <strong>Date of Registration:</strong> {formData.regDate}
            </p>
            <p>
              <strong>Visit Date:</strong> {formData.visitDate}
            </p>
            {isCitizenship && formData.photo && (
              <div className="form-group">
                <label>Uploaded Photo</label>
                <img
                  src={formData.photo}
                  alt="Uploaded"
                  className="uploaded-photo"
                />
              </div>
            )}
            <p>
              The hard copy of this application must be submitted to the nearest
              office on the selected date.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDisplay;
