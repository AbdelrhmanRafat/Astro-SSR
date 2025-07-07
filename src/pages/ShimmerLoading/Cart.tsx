import React, { useState, useRef, useEffect } from "react";
import CouponInput from "./CuponState";
import OrderSummaryContent from "./OrderSummaryContent";
import ChevronIcon from "./ChevronIcon";
import { useCartStore } from "../../lib/Stores/cartStore";

const Cart: React.FC = () => {
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
            className="d-lg-none d-flex justify-content-between align-items-center py-2"
            onClick={() => setShowMobileSummary(prev => !prev)}
            style={{ cursor: "pointer" }}
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
              className="d-lg-none overflow-hidden"
              style={{
                height: showMobileSummary ? height : "0px",
                transition: "height 0.4s ease",
              }}
              ref={contentRef}
            >
              <OrderSummaryContent />
            </div>

            {/* Desktop & MD content with sticky */}
            <div className="row">
              <div className="d-none d-md-block col-md-9 col-12">
                <div className="mb-3">
                  <h5 className="fw-bold text-dark mb-3 pb-2">ملخص الطلب</h5>
                </div>
                <OrderSummaryContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;