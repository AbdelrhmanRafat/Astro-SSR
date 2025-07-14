import React from 'react';
import { useCartStore } from '../../../lib/Stores/cartStore';
import CartItems from '../CartItems/CartItems';
import CouponInput from '../CuponState/CuponState';

const OrderSummary: React.FC = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  const numberOfProducts = useCartStore((state) => state.numberOfProducts); // ✅ get numberOfProducts

  return (
    <div className="d-flex flex-column gap-2">
      {/* Product Items */}
      <CartItems />

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

export default OrderSummary;