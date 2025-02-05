import React from "react";
import './Grievance.css'
const GrievanceFiling = () => {
  return (
    <div className="grievanceFiling">
      <h3 style={{textAlign:'center'}}>Grievance Filing Form</h3>
      <form action="">
      <div className="form">        
        <label htmlFor="gName">Name(first name, middle name and last name):<input type="text" name="gName" id="gName" /></label>
        
        <div className="rga">
        <label htmlFor="Nationality">Nationality: <input id="race" type="text" /></label>
        <label htmlFor="Gender">Gender: <input type="text" id="gGender" /></label>
        <label htmlFor="Age">Age: <input type="number" id="age"/></label>
        </div>
        
        <label htmlFor="MailingAddress">Mailing Address(include): <input type="text" id="mailingAddress"/></label>
        <label htmlFor="gEmail">Email address: <input type="text" /></label>

        <label htmlFor="issues">Grievable Issue: <input type="text" id="issues" /></label>

        <label htmlFor="breif">Brief statement of issues and facts on which grievance is based: </label><textarea name="brief" id="breif"></textarea> 
        <label htmlFor="resolution">Desired Relief or Resolution:</label>
        <textarea name="resolution" id="resolution"></textarea>
        <button className="btnSubmit">Submit</button>
      </div>
      </form>
    </div>
  );
};

export default GrievanceFiling;
