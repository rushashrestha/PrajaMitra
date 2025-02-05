import React from "react";
import './Grievance.css'
const GrievanceFiling = () => {
  return (
    <div className="grievanceFiling">
      <h3>Grievance Filing Form</h3>
      <form action="">
        <label htmlFor="gName">Name(first name, middle name and last name):</label>
        <input type="text" name="gName" id="gName" placeholder="Please enter your full name"/>
      </form>
      {/* Add your bill payment functionality here */}
    </div>
  );
};

export default GrievanceFiling;
