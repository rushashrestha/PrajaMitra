import React, { useState, useEffect } from "react";
import "./FormDisplay.css";

const FormDisplay = ({ isCitizenship }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    fatherName: "",
    motherName: "",
    dadCitizenship: "",
    momCitizenship: "",
    address: "",
    regDate: new Date().toISOString().split("T")[0],
    visitDate: "",
    submitted: false,
    appNumber: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    generateRandomVisitDate();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files.length > 0) {
      setFormData({
        ...formData,
        photo: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const generateRandomVisitDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);

    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 4);

    const randomDate = new Date(
      today.getTime() + Math.random() * (maxDate.getTime() - today.getTime())
    );
    setFormData((prevData) => ({
      ...prevData,
      visitDate: randomDate.toISOString().split("T")[0],
    }));
  };

  const generateAvailableDates = () => {
    const today = new Date();
    let availableDates = [];
    for (let i = 1; i <= 5; i++) {
      let futureDate = new Date();
      futureDate.setDate(today.getDate() + i);
      availableDates.push(futureDate.toISOString().split("T")[0]);
    }
    return availableDates;
  };

  const [availableDates, setAvailableDates] = useState([]);

  useEffect(() => {
    setAvailableDates(generateAvailableDates());
  }, []);

  const handleVisitDateChange = (e) => {
    setFormData({ ...formData, visitDate: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    const today = new Date();
    const dobDate = new Date(formData.dob);
    const age = today.getFullYear() - dobDate.getFullYear();

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";

    if (isCitizenship && age < 18)
      newErrors.dob = "Age must be greater than 18";
    if (!isCitizenship && age < 0) newErrors.dob = "Invalid date of birth";

    if (!formData.fatherName)
      newErrors.fatherName = "Father's name is required";
    if (!formData.motherName)
      newErrors.motherName = "Mother's name is required";

    if (isCitizenship) {
      if (!formData.citizenship || isNaN(formData.citizenship))
        newErrors.citizenship = "Citizenship number must be numeric";
      if (!formData.photo) newErrors.photo = "Photo upload is required";
    }

    if (!formData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
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
            {Object.keys(errors).map((key) => (
              <p className="error" key={key}>
                {errors[key]}
              </p>
            ))}
            <div className="form-group">
              <label>First Name</label>
              <input type="text" name="firstName" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" name="dob" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Father’s Name</label>
              <input type="text" name="fatherName" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Father's Citizenship No.</label>
              <input
                type="text"
                name="dadCitizenship"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mother’s Name</label>
              <input type="text" name="motherName" onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Mother's Citizenship No.</label>
              <input
                type="text"
                name="momCitizenship"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date of Registration</label>
              <input
                type="date"
                name="regDate"
                value={formData.regDate}
                readOnly
              />
            </div>
            <div className="form-group">
              <label>Visit Date</label>
              <select
                name="visitDate"
                onChange={handleVisitDateChange}
                required
              >
                <option value="">Select a date</option>
                {availableDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {isCitizenship && (
              <div className="form-group">
                <label>Upload Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
              </div>
            )}
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <div className="application-container">
            <div className="receipt-header">
              <h2>Application Receipt</h2>
              {isCitizenship && formData.photo && (
                <img
                  src={formData.photo}
                  alt="Uploaded"
                  className="uploaded-photo"
                />
              )}
            </div>
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
              <strong>Father's Citizenship No.:</strong>{" "}
              {formData.dadCitizenship} 
            </p>
            <p>
              <strong>Mother’s Name:</strong> {formData.motherName}
            </p>
            <p>
              <strong>Mother's Citizenship No.:</strong>{" "}
              {formData.momCitizenship}
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
            <p>
              The hard copy of this application must be submitted to the nearest
              office on the visit date.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormDisplay;
