import React, { useState } from "react";
import "./BillPayment.css";

const BillPayment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBill, setSelectedBill] = useState("");

  const openPopup = (billType) => {
    setSelectedBill(billType);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bill-payment-container">
      <h1>Bill Payments</h1>
      <div className="bill-options">
        <div className="bill-card">
          <h3>Electricity Bill</h3>
          <button onClick={() => openPopup("Electricity")}>Pay Now</button>
        </div>
        <div className="bill-card">
          <h3>Water Bill</h3>
          <button onClick={() => openPopup("Water")}>Pay Now</button>
        </div>
        <div className="bill-card">
          <h3>Internet Bill</h3>
          <button onClick={() => openPopup("Internet")}>Pay Now</button>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-icon" onClick={closePopup}>&times;</span>
            <h2>{selectedBill} Bill Payment</h2>

            {/* Electricity Bill Inputs */}
            {selectedBill === "Electricity" && (
              <>
                <label>NEA Counter:</label>
                <select>
                  <option value="">Select Counter</option>
                  <option value="counter1">ACHHAM</option>
                  <option value="counter2">THIMI</option>
                  <option value="counter3">BHAKTAPUR</option>
                  <option value="counter3">KATHMANDU</option>
                  <option value="counter3">LALITPUR</option>
                  <option value="counter3">BHOJPUR</option>
                  <option value="counter3">ILLAM</option>
                </select>

                <label>SC.NO.:</label>
                <input type="text" placeholder="Enter SC.NO." />

                <label>Customer ID:</label>
                <input type="text" placeholder="Enter Customer ID" />
              </>
            )}

            {/* Water Bill Inputs */}
            {selectedBill === "Water" && (
              <>
                <label>Branch:</label>
                <input type="text" placeholder="Enter Branch" />

                <label>Customer No:</label>
                <input type="text" placeholder="Enter Customer No" />
              </>
            )}

            {/* Internet Bill Inputs */}
            {selectedBill === "Internet" && (
              <>
                <label>Username:</label>
                <input type="text" placeholder="Enter Username" />
              </>
            )}

            <button className="proceed-btn">Proceed</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillPayment;
