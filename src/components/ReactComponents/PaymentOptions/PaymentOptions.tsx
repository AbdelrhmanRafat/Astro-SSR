import "./PaymentOptions.css";
import React, { useState } from 'react';

const PaymentOptions: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState("credit");

  const handlePaymentChange = (value: string) => {
    setSelectedPayment(value);
  };
  return (
    <>
      <div className="d-flex flex-column gap-2">
        <h5 className="fw-bold text-dark">طريقة الدفع</h5>
        <div className="d-flex flex-column gap-3">

          {/* بطاقة ائتمان */}
          <label className="border rounded p-3 d-flex gap-3 align-items-start">
            <input
              type="radio"
              name="payment"
              value="credit"
              className="form-check-input mt-1"
              checked={selectedPayment === "credit"}
              onChange={(e) => handlePaymentChange(e.target.value)}
            />
            <div className="flex-grow-1 ms-2">
              <div className="fw-semibold">بطاقة ائتمان</div>
              <div className="text-muted small">
                ادفع بأمان باستخدام بطاقة الائتمان الخاصة بك.
              </div>
              <div className="d-flex gap-2 flex-wrap mt-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png"
                  alt="MasterCard"
                  className="checkoutform-img-15"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
                  alt="Visa"
                  className="checkoutform-img-15"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png"
                  alt="Orange"
                  className="checkoutform-img-15"
                />
              </div>
            </div>
          </label>

          {/* الدفع عند الاستلام */}
          <label className="border rounded p-3 d-flex gap-3 align-items-start">
            <input
              type="radio"
              name="payment"
              value="cash"
              className="form-check-input mt-1"
              checked={selectedPayment === "cash"}
              onChange={(e) => handlePaymentChange(e.target.value)}
            />
            <div className="flex-grow-1 ms-2">
              <div className="fw-semibold">الدفع عند الاستلام</div>
              <div className="text-muted small">
                ادفع نقدًا عند الاستلام.
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="border border-secondary rounded p-3">
      <div className="d-flex justify-content-start align-items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="none" stroke="#606060" strokeWidth="32">
          <circle cx="256" cy="256" r="208" />
          <line x1="256" y1="160" x2="256" y2="280" />
          <circle cx="256" cy="344" r="16" fill="#606060" />
        </svg>
        <p className="small text-muted mb-0">
          خصم ١٠٪ من قيمة الطلب عند الدفع اونلاين
        </p>
      </div>
      </div>
    </>
  );
};

export default PaymentOptions;