import React, { useState } from 'react';

const AcceptCheckOutPolicy: React.FC = () => {
  const [shippingPolicyAccepted, setShippingPolicyAccepted] = useState(false);
  const [giftOptionSelected, setGiftOptionSelected] = useState(false);

  const handleShippingPolicyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingPolicyAccepted(e.target.checked);
  };

  const handleGiftOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGiftOptionSelected(e.target.checked);
  };

  return (
    <div className="d-flex flex-column gap-3">
      {/* Shipping Policy Checkbox */}
      <div className="form-check">
        <input
          type="checkbox"
          id="shippingPolicy"
          checked={shippingPolicyAccepted}
          onChange={handleShippingPolicyChange}
          className="form-check-input"
        />
        <label htmlFor="shippingPolicy" className="form-check-label fs-6 fw-semibold text-dark ms-2">
          أوافق على سياسة الشحن والإرجاع
        </label>
      </div>

      {/* Gift Option Checkbox */}
      <div className="form-check">
        <input
          type="checkbox"
          id="giftOption"
          checked={giftOptionSelected}
          onChange={handleGiftOptionChange}
          className="form-check-input"
        />
        <label htmlFor="giftOption" className="form-check-label fs-6 fw-semibold text-dark ms-2">
          إضافة هدية مع الطلب (+50 جنيه)
        </label>
      </div>
    </div>
  );
};

export default AcceptCheckOutPolicy;  