/**
 * @file CheckoutFormButtons.tsx
 * @description This component renders the action buttons for the checkout form, such as "Back to cart" and "Continue to shipping".
 *
 * @component
 * @returns {JSX.Element} The rendered form buttons.
 *
 * @logic
 * - The component includes two buttons:
 *   - A "Back to cart" button that triggers the `handleBackClick` function.
 *   - A "Continue to shipping" button, which is an instance of the `CheckoutButton` component and triggers the `handleCheckoutClick` function.
 * - The `handleBackClick` and `handleCheckoutClick` functions currently only log messages to the console. In a real application, they would handle navigation or form submission.
 *
 * @integration
 * - This component is designed to be placed at the end of the `CheckoutForm`.
 * - It uses the `CheckoutButton` component for its primary action button, demonstrating composition of components.
 */
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