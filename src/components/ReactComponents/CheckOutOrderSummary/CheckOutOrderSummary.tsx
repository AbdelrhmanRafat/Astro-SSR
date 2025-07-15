/**
 * @file CheckOutOrderSummary.tsx
 * @description This component displays a summary of the order, including the cart items, coupon input, and a breakdown of the total cost.
 *
 * @component
 * @returns {JSX.Element} The rendered CheckOutOrderSummary component.
 *
 * @logic
 * - The component subscribes to a `useCartStore` to get the `totalPrice` and `numberOfProducts` from the global state.
 * - It conditionally renders the `CouponInput` and additional notes only if there are products in the cart (`numberOfProducts > 0`).
 * - It displays a breakdown of the costs, including:
 *   - Subtotal: The `totalPrice` from the cart store.
 *   - Shipping: A hardcoded value (e.g., 50.00).
 *   - Taxes: A hardcoded value (e.g., 25.00).
 * - The final total is displayed, which currently reflects the `totalPrice` from the store. Note that the hardcoded shipping and taxes are not added to the final total in this component.
 *
 * @integration
 * - This component is designed to be placed within the `CheckoutCart` component.
 * - It depends on the following child components:
 *   - `CheckoutCartItems`: To display the list of items in the cart.
 *   - `CouponInput`: To allow the user to enter a coupon code.
 * - It relies on the `useCartStore` for its data, so it must be used in an application where this store is properly initialized.
 */
import React from 'react';
import { useCartStore } from '../../../lib/Stores/cartStore';
import CouponInput from '../CuponState/CuponState';
import CheckoutCartItems from '../CheckoutCartItems/CheckoutCartItems';

const CheckOutOrderSummary: React.FC = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const numberOfProducts = useCartStore((state) => state.numberOfProducts); // ✅ get numberOfProducts

  return (
    <div className="d-flex flex-column gap-2">
      {/* Product Items */}
      <CheckoutCartItems />

      {/* Show only if numberOfProducts > 0 */}
      {numberOfProducts > 0 && (
        <>
          {/* Coupon Input */}
          <CouponInput />

          {/* Notes */}
          {[1, 2].map((_, i) => (
            <div key={i} className="border border-secondary rounded p-3">
              <div className="d-flex justify-content-start align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="none" stroke="#606060" strokeWidth="32">
                  <circle cx="256" cy="256" r="208" />
                  <line x1="256" y1="160" x2="256" y2="280" />
                  <circle cx="256" cy="344" r="16" fill="#606060" />
                </svg>
                <p className="small text-muted mb-0">
                  ملاحظة: رسوم إضافية 50 جنيه لهذا المنتج
                </p>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Totals Section */}
      <div className="d-flex flex-column gap-3 pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">المجموع الفرعي:</span>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <span className="fw-semibold">{totalPrice}</span>
            <span className="text-muted">ج.م</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">الشحن:</span>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <span className="fw-semibold">50.00</span>
            <span className="text-muted">ج.م</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">الضرائب:</span>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <span className="fw-semibold">25.00</span>
            <span className="text-muted">ج.م</span>
          </div>
        </div>

        {/* Final Total */}
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="h6 fw-bold text-dark">المجموع الكلي:</span>
            <div className="d-flex justify-content-end align-items-center gap-1">
              <span className="h5 fw-bold text-black mb-0">{totalPrice}</span>
              <span className="text-muted">ج.م</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutOrderSummary;