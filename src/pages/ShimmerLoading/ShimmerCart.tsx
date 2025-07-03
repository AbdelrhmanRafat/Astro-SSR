import React from 'react';
const ShimmerCart = () => {
  return (
    <div className="container-fluid bg-secondary-subtle min-vh-md-100">
  <div className="row">
    <div className="col-12 col-md-8 d-flex flex-column justify-content-start align-items-start gap-3 p-4 py-5">

      {/* Static Products Skeleton */}
      <div className="d-flex flex-column gap-3 w-100">
        <div className="d-flex justify-content-between align-items-center gap-3 placeholder-glow">

          {/* Left Side: Product Image + Info Skeleton */}
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <div className="placeholder rounded" style={{ width: '64px', height: '64px' }}></div>
              <div
                className="position-absolute bg-secondary rounded-circle"
                style={{
                  top: '-8px',
                  left: '-8px',
                  width: '20px',
                  height: '20px',
                }}
              ></div>
            </div>

            {/* Product Name & Code Skeleton */}
            <div>
              <div className="placeholder rounded mb-1" style={{ height: '18px', width: '200px' }}></div>
              <div className="placeholder rounded" style={{ height: '14px', width: '80px' }}></div>
            </div>
          </div>

          {/* Right Side: Price Skeleton */}
          <div className="text-end">
            <div className="placeholder rounded" style={{ height: '18px', width: '90px' }}></div>
          </div>
        </div>
      </div>

      {/* Action Buttons Skeleton */}
      <div className="placeholder-glow w-100">
        <div className="placeholder rounded" style={{ height: '48px', width: '100%' }}></div>
      </div>

      {/* Shipping Info Notes Skeleton */}
      {[1, 2].map((_, i) => (
        <div key={i} className="border rounded p-3 w-100 bg-white placeholder-glow">
          <div className="d-flex justify-content-start align-items-center gap-2">
            <div className="placeholder rounded-circle" style={{ width: '20px', height: '20px' }}></div>
            <div className="flex-grow-1">
              <div className="placeholder rounded" style={{ height: '14px', width: '85%' }}></div>
            </div>
          </div>
        </div>
      ))}

      {/* Totals Skeleton */}
      <div className="w-100 d-flex flex-column gap-2 placeholder-glow" dir="rtl">
        {/* Subtotal */}
        <div className="d-flex justify-content-between">
          <div className="placeholder rounded" style={{ height: '18px', width: '100px' }}></div>
          <div className="placeholder rounded" style={{ height: '18px', width: '130px' }}></div>
        </div>
        {/* Shipping */}
        <div className="d-flex justify-content-between">
          <div className="placeholder rounded" style={{ height: '18px', width: '60px' }}></div>
          <div className="placeholder rounded" style={{ height: '18px', width: '90px' }}></div>
        </div>
        {/* Total */}
        <div className="d-flex justify-content-between">
          <div className="placeholder rounded" style={{ height: '18px', width: '80px' }}></div>
          <div className="d-flex align-items-center gap-2">
            <div className="placeholder rounded" style={{ height: '18px', width: '110px' }}></div>
            <div className="placeholder rounded" style={{ height: '14px', width: '30px' }}></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
  );
}

export default ShimmerCart;