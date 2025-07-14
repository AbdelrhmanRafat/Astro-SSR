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