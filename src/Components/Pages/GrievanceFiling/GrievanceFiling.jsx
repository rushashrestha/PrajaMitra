import React, { useState } from "react";
import './Grievance.css';
import { db } from "../../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const GrievanceFiling = () => {
  const [formData, setFormData] = useState({
    gName: "",
    nationality: "",
    gender: "",
    age: "",
    mailingAddress: "",
    gEmail: "",
    issues: "",
    brief: "",
    resolution: "",
    submitted: false,
    applicationNumber: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicationNumber =Math.floor(100000 + Math.random()*900000).toString();
    
    const dataToSave = {
      gName: formData.gName,
      nationality: formData.nationality,
      gender: formData.gender,
      age: formData.age,
      mailingAddress: formData.mailingAddress,
      gEmail: formData.gEmail,
      issues: formData.issues,
      brief:formData.brief,
      resolution: formData.resolution,
      applicationNumber,
      status:"pending",
      submittedAt: new Date()
    }

    try {
      await addDoc(collection(db,"grievances"),dataToSave);

      setFormData({
        ...formData,
        submitted:true,
        applicationNumber
      });

      console.log("Grievance successfully submitted to Firestore!")
    } catch (error) {
       console.error("Error saving grievance:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="grievanceFiling">
      {!formData.submitted ? (
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: 'center' }}>Grievance Filing Form</h3>
          <div className="form">
            <label>Name (First, Middle, Last):</label>
            <input type="text" name="gName" value={formData.gName} onChange={handleChange} required />

            <div className="rga">
              <label>Nationality:</label>
              <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />

              <label>Gender:</label>
              <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />

              <label>Age:</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} required />
            </div>

            <label>Mailing Address (Include Postal Code):</label>
            <input type="text" name="mailingAddress" value={formData.mailingAddress} onChange={handleChange} required />

            <label>Email Address:</label>
            <input type="email" name="gEmail" value={formData.gEmail} onChange={handleChange} required />

            <label>Grievable Issue:</label>
            <input type="text" name="issues" value={formData.issues} onChange={handleChange} required />

            <label>Brief Statement of Issues and Facts:</label>
            <textarea name="brief" value={formData.brief} onChange={handleChange} required rows={9}></textarea>

            <label>Desired Relief or Resolution:</label>
            <textarea name="resolution" value={formData.resolution} onChange={handleChange} required rows={9}></textarea>

            <button type="submit" className="btnSubmit" >Submit</button>
          </div>
        </form>
      ) : (
        <div className="applicationContainer">
          <h3 style={{ textAlign: 'center' }}>Grievance Application Receipt</h3>
          <p><strong>Application Number:</strong> {formData.applicationNumber}</p>
          <p><strong>Name:</strong> {formData.gName}</p>
          <p><strong>Nationality:</strong> {formData.nationality}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Mailing Address:</strong> {formData.mailingAddress}</p>
          <p><strong>Email:</strong> {formData.gEmail}</p>
          <p><strong>Grievable Issue:</strong> {formData.issues}</p>
          <p><strong>Brief Statement:</strong> {formData.brief}</p>
          <p><strong>Desired Resolution:</strong> {formData.resolution}</p>
          
          <p style={{ fontWeight: "bold", color: "blue", textAlign: "center", fontSize: "18px" }}>
            Application Status: {formData.status}
          </p>

          <p style={{ textAlign: "center" }}>Your grievance has been recorded. You will receive further updates via email.</p>
        </div>
      )}
    </div>
  );
};

export default GrievanceFiling;
