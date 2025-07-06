
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
    <div className="bg-secondary-muted  border-start border-2 border-light-subtle">
      <div className="sticky-top" style={{ top: '1rem' }}>
        <div className="">
          <div className="py-2 p-md-3">
            {/* ✅ Mobile Header Toggle */}
            <div
              className="d-lg-none d-flex justify-content-between align-items-center"
              onClick={() => setShowMobileSummary(prev => !prev)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex align-items-center gap-2">
                <i className={`bi bi-chevron-${showMobileSummary ? 'up' : 'down'} text-primary`}></i>
                <span className="fw-bold text-black">ملخص الطلب</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span className="fw-bold text-dark">ج.م ٩٦٥٨١٠٫٠٠</span>
                <i className="bi bi-receipt text-muted"></i>
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

              {/* Desktop content */}
              <div className="row">
              <div className="d-none mb-5 d-lg-block col-md-9 col-12">
                <div className="mb-3">
                  <h5 className="fw-bold text-dark mb-3 border-bottom pb-2">
                    <i className="bi bi-cart3 me-2"></i>ملخص الطلب
                  </h5>
                </div>
                <OrderSummaryContent />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;