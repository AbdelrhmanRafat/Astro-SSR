import React from 'react';
import CheckoutButton from '../CheckoutButton/CheckoutButton';

const CheckoutFormButtons: React.FC = () => {
  const handleBackClick = () => {
    console.log("Back to cart clicked");
    // Handle back navigation
  };

  const handleCheckoutClick = () => {
    console.log("Continue to shipping clicked");
    // Handle form submission or navigation
  };

  return (
    <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center gap-3 mb-md-0 mb-4">
      <button
        type="button"
        onClick={handleBackClick}
        className="w-fit btn text-secondary d-flex justify-content-start align-items-center gap-1"
      >
        <span className="fs-7 fw-semibold">العودة لعربة التسوق</span>
      </button>
      
      <CheckoutButton 
        title="المتابعة لطريقة الشحن"
        onClick={handleCheckoutClick}
        type="button"
      />
    </div>
  );
};

export default CheckoutFormButtons;