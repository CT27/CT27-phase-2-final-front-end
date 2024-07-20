import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentDetails = ({ userEmail }) => {
  const [userId, setUserId] = useState(null);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bsbCode, setBsbCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Fetch user data to get user ID
    const fetchUserId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users?email=${userEmail}`
        );
        if (response.data.length > 0) {
          const user = response.data[0];
          setUserId(user.id);
        } else {
          setError("User not found.");
        }
      } catch (err) {
        console.error("Error fetching user data:", err.message);
        setError("Failed to fetch user data.");
      }
    };

    fetchUserId();
  }, [userEmail]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId || !bankName || !accountNumber || !bsbCode) {
      setError("All fields are required.");
      return;
    }

    try {
      // Update user profile with new bank details
      const response = await axios.put(
        `http://localhost:3000/api/users/${userId}`,
        {
          bankName,
          accountNumber,
          bsbCode,
        }
      );

      console.log("Payment details updated successfully:", response.data);
      setSuccess("Payment details updated successfully.");
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error updating payment details:", error.message);
      setError("Failed to update payment details.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Payment Details</h2>
      <form onSubmit={handleSubmit}>
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
