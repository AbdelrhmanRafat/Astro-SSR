import React, { useState, useRef, useEffect } from "react";
import CouponInput from "./CuponState";
import OrderSummaryContent from "./OrderSummaryContent";

const CartItems: React.FC = () => {
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (showMobileSummary && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [showMobileSummary]);

  return (
    <div className="container-fluid bg-secondary-subtle min-vh-md-100">
      <div className="row">
        <div className="col-12 col-md-8 d-flex flex-column justify-content-start align-items-start gap-3 p-1 p-md-4 py-md-5">

          {/* ✅ Mobile Header Toggle */}
          <div
            className="d-md-none container d-flex justify-content-between align-items-center fw-medium"
            onClick={() => setShowMobileSummary(prev => !prev)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center gap-2 text-primary">
              <span>ملخص الطلب</span>
              <span>{showMobileSummary ? "⬆" : "⬇"}</span>
            </div>
            <span className="text-nowrap">ج.م ٩٦٥٨١٠٫٠٠</span>
          </div>

          {/* ✅ Order Summary Content */}
          <div className="w-100 d-md-flex flex-column gap-3">
            {/* Mobile content */}
            <div
              className="d-md-none overflow-hidden transition-all"
              style={{
                height: showMobileSummary ? height : "0px",
                transition: "height 0.4s ease",
              }}
              ref={contentRef}
            >
              <OrderSummaryContent />
            </div>

            {/* Desktop content */}
            <div className="d-none d-md-block">
              <OrderSummaryContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;