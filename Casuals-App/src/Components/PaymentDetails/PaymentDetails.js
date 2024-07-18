import React from "react";

const PaymentDetails = () => {
  return (
    <div>
      <h2>Payment Details</h2>
      <form>
        <div className="form-group">
          <label>Bank Name:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Account Number:</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>IFSC Code:</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
