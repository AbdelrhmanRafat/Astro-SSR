/**
 * @file CouponInput.tsx
 * @description A component that provides an input field for users to enter a coupon code and a button to apply it.
 *
 * @component
 * @returns {JSX.Element} The rendered coupon input and button.
 *
 * @logic
 * - The component uses the `useState` hook to manage the value of the coupon code input (`code`).
 * - The "Apply Code" button is conditionally styled. It uses `btn-primary` when there is text in the input, and `btn-outline-secondary` when the input is empty.
 * - The component does not currently implement the logic for validating the coupon code or applying a discount.
 *
 * @integration
 * - This component is used within the `CheckOutOrderSummary` to allow users to apply a discount to their order.
 * - It is self-contained and does not depend on any other components.
 */
import { useState } from 'react';

function CouponInput() {
  const [code, setCode] = useState('');

  return (
    <>
    <div className="d-flex align-items-stretch gap-3 mt-4 w-100">
  <div className="form-floating flex-grow-1 w-100">
    <input
      type="text"
      className="form-control"
      id="couponCode"
      placeholder="أدخل كود الخصم"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
    <label htmlFor="couponCode">أدخل كود الخصم</label>
  </div>

  <button
    type="button"
    className={`btn text-nowrap ${code.trim() ? 'btn-primary' : 'btn-outline-secondary'}`}
  >
    تطبيق الكود
  </button>
</div>
    </>
  );
}

export default CouponInput;