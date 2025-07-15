/**
 * @file CheckoutButton.tsx
 * @description A reusable button component for the checkout process.
 * It can be configured with a title, click handler, disabled state, and type.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.title - The text to display on the button.
 * @param {() => void} [props.onClick] - An optional click event handler.
 * @param {boolean} [props.disabled=false] - An optional boolean to disable the button.
 * @param {"button" | "submit"} [props.type="button"] - The type of the button.
 * @returns {JSX.Element} The rendered button component.
 *
 * @logic
 * - The component receives props to customize its behavior and appearance.
 * - The `onClick` handler is passed directly to the button's `onClick` event.
 * - The `disabled` prop controls the button's disabled attribute.
 * - The `type` prop allows the button to be used as a standard button or a form submission button.
 *
 * @integration
 * - This component is designed to be used throughout the checkout form, such as for "Continue" or "Place Order" actions.
 * - It can be placed within any form or component that requires a button with these specific styles and functionalities.
 */
import React from 'react';

interface CheckoutButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ 
  title, 
  onClick, 
  disabled = false,
  type = "button"
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-100 w-md-fit btn btn-primary text-center py-2 py-md-4 px-3 rounded-4"
    >
      <span className="fs-7 fw-semibold">{title}</span>
    </button>
  );
};

export default CheckoutButton;