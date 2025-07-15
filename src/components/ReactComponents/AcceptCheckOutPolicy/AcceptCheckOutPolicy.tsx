/**
 * @file AcceptCheckOutPolicy.tsx
 * @description This component renders checkboxes for accepting the shipping policy and opting for a gift option.
 * It manages the state of these checkboxes and is typically integrated into a checkout form.
 *
 * @component
 * @returns {JSX.Element} The rendered AcceptCheckOutPolicy component.
 *
 * @logic
 * - The component uses the `useState` hook to manage the state of two checkboxes:
 *   - `shippingPolicyAccepted`: A boolean state to track if the shipping policy is accepted.
 *   - `giftOptionSelected`: A boolean state to track if the gift option is selected.
 * - `handleShippingPolicyChange`: A function that updates the `shippingPolicyAccepted` state when the user interacts with the shipping policy checkbox.
 * - `handleGiftOptionChange`: A function that updates the `giftOptionSelected` state when the user interacts with the gift option checkbox.
 *
 * @integration
 * - This component is designed to be part of a larger checkout form.
 * - The state of the checkboxes can be lifted up to the parent component to influence other parts of the application, such as enabling a "Proceed to Payment" button or adding a gift-wrapping fee to the order total.
 */
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