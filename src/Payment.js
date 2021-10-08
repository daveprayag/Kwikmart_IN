/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = userStateValue;
  return (
    <div className="payment">
      <h1>This is payment page</h1>
      <div className="payment_container">
        {/* Payment section - delivery address  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
          </div>
        </div>

        {/* Payment section - Review items  */}
        <div className="payment_section"></div>

        {/* Payment section - Payment method  */}
        <div className="payment_section"></div>
      </div>
    </div>
  );
}

export default Payment;
