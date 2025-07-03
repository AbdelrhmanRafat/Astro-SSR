// 📁 ShimmerForm.jsx
import React from 'react';

const ShimmerForm = () => {
  return (
    <div className="w-100 d-flex flex-column justify-content-start align-items-center gap-3">
      {/* Note Box */}
      <div className="w-100 border rounded p-3 d-flex justify-content-start align-items-center gap-2 placeholder-glow">
        <div className="placeholder rounded-circle placeholder-sm"></div>
        <div className="flex-grow-1">
          <div className="placeholder rounded placeholder-label w-85"></div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-100 d-flex flex-column align-items-start gap-2">
        <div className="placeholder rounded placeholder-label w-150"></div>
        <div className="w-100 placeholder-glow">
          <div className="placeholder rounded placeholder-label w-140 mb-1"></div>
          <div className="placeholder rounded placeholder-md w-100"></div>
        </div>
        <div className="d-flex align-items-center gap-2 placeholder-glow">
          <div className="placeholder rounded-circle placeholder-sm"></div>
          <div className="placeholder rounded placeholder-label w-150"></div>
        </div>
      </div>

      {/* Shipping Address */}
      <div className="w-100 d-flex flex-column align-items-start gap-2">
        <div className="placeholder rounded placeholder-label w-120"></div>
        <div className="w-100 placeholder-glow">
          <div className="placeholder rounded placeholder-label w-40 mb-1"></div>
          <div className="placeholder rounded placeholder-md w-100"></div>
        </div>

        <div className="row w-100 g-3">
          {[1, 2].map((_, i) => (
            <div className="col-12 col-md-6" key={i}>
              <div className="placeholder-glow">
                <div className="placeholder rounded placeholder-label w-80 mb-1"></div>
                <div className="placeholder rounded placeholder-md w-100"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-100 placeholder-glow">
          <div className="placeholder rounded placeholder-label w-60 mb-1"></div>
          <div className="placeholder rounded placeholder-md w-100"></div>
        </div>

        <div className="row w-100 g-3">
          {["50", "60"].map((width, i) => (
            <div className="col-12 col-md-6" key={i}>
              <div className="placeholder-glow">
                <div className={`placeholder rounded placeholder-label w-${width} mb-1`}></div>
                <div className="placeholder rounded placeholder-md w-100"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-100 placeholder-glow">
          <div className="placeholder rounded placeholder-label w-140 mb-1"></div>
          <div className="placeholder rounded placeholder-md w-100"></div>
        </div>

        <div className="w-100 position-relative placeholder-glow">
          <div className="placeholder rounded placeholder-label w-220 mb-1"></div>
          <div className="placeholder rounded placeholder-md w-100"></div>
          <div className="position-absolute start-0 top-50 translate-middle-y ps-3 placeholder rounded placeholder-sm mt-1"></div>
        </div>

        <div className="d-flex align-items-center gap-2 placeholder-glow">
          <div className="placeholder rounded-circle placeholder-sm"></div>
          <div className="placeholder rounded placeholder-label w-180"></div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 gap-3 pt-2">
          <div className="placeholder rounded placeholder-label w-120"></div>
          <div className="placeholder rounded placeholder-md w-160"></div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerForm;