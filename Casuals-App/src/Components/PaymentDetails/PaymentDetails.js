import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PaymentDetails.css";

const PaymentDetails = ({ userId }) => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bsbCode, setBsbCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchUserDetails = async () => {
      const storedUserId = userId || localStorage.getItem("userId");
      if (storedUserId) {
        try {
          const response = await axios.get(
            `http://localhost:3000/api/users/${storedUserId}`
          );
          const userDetails = response.data;
          setBankName(userDetails.bankName || "");
          setAccountNumber(userDetails.accountNumber || "");
          setBsbCode(userDetails.bsbCode || "");
        } catch (err) {
          console.error("Error fetching user details:", err.message);
          setError("Failed to fetch user details.");
        }
      }
    };

    fetchUserDetails();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUserId = userId || localStorage.getItem("userId");
    if (!storedUserId || !bankName || !accountNumber || !bsbCode) {
      setError("All fields are required.");
      return;
    }

    try {
      // Fetch the current user data
      const response = await axios.get(
        `http://localhost:3000/api/users/${storedUserId}`
      );
      const currentUserDetails = response.data;

      // Merge existing user details with new payment details
      const updatedUserDetails = {
        ...currentUserDetails,
        bankName: bankName || currentUserDetails.bankName || "",
        accountNumber: accountNumber || currentUserDetails.accountNumber || "",
        bsbCode: bsbCode || currentUserDetails.bsbCode || "",
      };

      // Update the user data with merged details
      const updateResponse = await axios.put(
        `http://localhost:3000/api/users/${storedUserId}`,
        updatedUserDetails
      );

      console.log("Payment details updated successfully:", updateResponse.data);
      setSuccess("Payment details updated successfully.");
      setError("");
    } catch (error) {
      console.error("Error updating payment details:", error.message);
      setError("Failed to update payment details.");
    }
  };

  return (
    <div className="container mt-4">
      {/* <h2 className="mb-4">Payment Details</h2> */}
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User ID:
          </label>
          <input
            type="text"
            id="userId"
            className="form-control"
            value={userId || localStorage.getItem("userId") || ""}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bankName" className="form-label">
            Bank Name:
          </label>
          <input
            type="text"
            id="bankName"
            className="form-control"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="accountNumber" className="form-label">
            Account Number:
          </label>
          <input
            type="text"
            id="accountNumber"
            className="form-control"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bsbCode" className="form-label">
            BSB Code:
          </label>
          <input
            type="text"
            id="bsbCode"
            className="form-control"
            value={bsbCode}
            onChange={(e) => setBsbCode(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
