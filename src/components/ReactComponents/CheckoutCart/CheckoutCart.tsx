/**
 * @file CheckoutCart.tsx
 * @description This component serves as the main container for the shopping cart summary in the checkout process.
 * It features a responsive design with a collapsible summary for mobile view and a sticky summary for desktop view.
 *
 * @component
 * @returns {JSX.Element} The rendered CheckoutCart component.
 *
 * @logic
 * - The component uses `useState` to manage the visibility of the order summary on mobile (`showMobileSummary`).
 * - It uses `useRef` and `useEffect` to dynamically calculate and set the height of the collapsible content for a smooth animation.
 * - It subscribes to the `useCartStore` to get the `totalPrice` and display it in the header.
 * - The mobile view includes a toggle button that expands or collapses the order summary.
 * - The desktop view displays the order summary in a sticky column, so it remains visible while scrolling.
 *
 * @integration
 * - This component is a key part of the `ChckoutContainer`, where it is displayed alongside the `CheckoutForm`.
 * - It depends on the following child components:
 *   - `ChevronIcon`: To indicate the collapsible state of the mobile summary.
 *   - `CheckOutOrderSummary`: To render the actual content of the order summary.
 * - It relies on `useCartStore` for data, so it must be used in an application where this store is properly initialized.
 */
import "./CheckoutCart.css";
import React, { useState, useRef, useEffect } from "react";
import { useCartStore } from "../../../lib/Stores/cartStore";
import ChevronIcon from "../ChevronIcon/ChevronIcon";
import CheckOutOrderSummary from "../CheckOutOrderSummary/CheckOutOrderSummary";


const CheckoutCart: React.FC = () => {
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const totalPrice = useCartStore((state) => state.totalPrice);

  useEffect(() => {
    if (showMobileSummary && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [showMobileSummary]);

  return (
    <div className="border-start border-2 border-light-subtle sticky-md-top">
      <div className="container-fluid">
        <div className="py-2 p-md-3">
          {/* ✅ Mobile Header Toggle */}
          <div
            className="d-lg-none d-flex justify-content-between align-items-center py-2 cart-mobile-header-toggle"
            onClick={() => setShowMobileSummary(prev => !prev)}
          >
            <div className="d-flex align-items-center gap-2">
              <ChevronIcon open={showMobileSummary} />
              <span className="fw-bold text-black">ملخص الطلب</span>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-1">
              <span className="fw-bold text-dark">{totalPrice}</span>
              <span className="text-muted">ج.م</span>
            </div>
          </div>

          {/* ✅ Order Summary Content */}
          <div>
            {/* Mobile content */}
            <div
              className="d-lg-none cart-mobile-content"
              style={{ height: showMobileSummary ? height : "0px" }}
              ref={contentRef}
            >
              <CheckOutOrderSummary />
            </div>

            {/* Desktop & MD content with sticky */}
            <div className="row">
              <div className="d-none d-lg-block col-lg-9 col-12">
                <div className="mb-3">
                  <h5 className="fw-bold text-dark mb-3 pb-2">ملخص الطلب</h5>
                </div>
                <CheckOutOrderSummary />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCart;