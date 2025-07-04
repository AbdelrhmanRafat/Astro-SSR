
import React from 'react';

const ShimmerCart = () => {
  return (
    <div className="bg-light border-start border-2 border-light-subtle min-vh-100">
      <div className="sticky-top" style={{ top: '1rem' }}>
        <div className="bg-white shadow-sm rounded-3 m-3">
          <div className="p-4">
            {/* Header Skeleton */}
            <div className="mb-4 placeholder-glow">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="placeholder rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                <div className="placeholder rounded-3" style={{ height: '24px', width: '100px' }}></div>
              </div>
              <div className="placeholder rounded-3 bg-light" style={{height: '2px', width: '100%'}}></div>
            </div>

            {/* Product Items Skeleton */}
            <div className="d-flex flex-column gap-3 mb-4">
              <div className="p-3 bg-light rounded-3 placeholder-glow">
                <div className="d-flex justify-content-between align-items-center">
                  {/* Left Side: Product Image + Info Skeleton */}
                  <div className="d-flex align-items-center gap-3">
                    <div className="position-relative">
                      <div className="placeholder rounded-3" style={{ width: '64px', height: '64px' }}></div>
                      <div
                        className="position-absolute bg-secondary rounded-circle"
                        style={{
                          top: '-8px',
                          left: '-8px',
                          width: '24px',
                          height: '24px',
                        }}
                      ></div>
                    </div>
                    <div>
                      <div className="placeholder rounded-3 mb-2" style={{ height: '16px', width: '180px' }}></div>
                      <div className="placeholder rounded-3" style={{ height: '12px', width: '80px' }}></div>
                    </div>
                  </div>
                  {/* Right Side: Price Skeleton */}
                  <div className="text-end">
                    <div className="placeholder rounded-3" style={{ height: '18px', width: '80px' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-3" />

            {/* Totals Skeleton */}
            <div className="d-flex flex-column gap-3 placeholder-glow">
              {/* Subtotal */}
              <div className="d-flex justify-content-between">
                <div className="placeholder rounded-3" style={{ height: '16px', width: '100px' }}></div>
                <div className="placeholder rounded-3" style={{ height: '16px', width: '80px' }}></div>
              </div>
              {/* Shipping */}
              <div className="d-flex justify-content-between">
                <div className="placeholder rounded-3" style={{ height: '16px', width: '60px' }}></div>
                <div className="placeholder rounded-3" style={{ height: '16px', width: '70px' }}></div>
              </div>
              {/* Taxes */}
              <div className="d-flex justify-content-between">
                <div className="placeholder rounded-3" style={{ height: '16px', width: '70px' }}></div>
                <div className="placeholder rounded-3" style={{ height: '16px', width: '65px' }}></div>
              </div>
              
              {/* Total */}
              <div className="border-top pt-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="placeholder rounded-3" style={{ height: '20px', width: '100px' }}></div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="placeholder rounded-3" style={{ height: '24px', width: '120px' }}></div>
                    <div className="placeholder rounded-3" style={{ height: '12px', width: '60px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerCart;