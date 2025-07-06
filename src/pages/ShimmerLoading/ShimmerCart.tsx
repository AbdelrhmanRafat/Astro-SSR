
import React from 'react';

const ShimmerCart = () => {
  return (
<div className='row'>
    <div className="d-flex flex-column gap-4 col-md-9 col-12" >
      {/* Product Items Skeleton */}
      < div className="d-flex flex-column gap-3" >
        <div className="d-flex justify-content-between align-items-center p-3 rounded-3 placeholder-glow">
          {/* Product Image & Info Skeleton */}
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <div className="placeholder rounded-3" style={{ width: '64px', height: '64px' }}></div>
              <div
                className="position-absolute  rounded-circle"
                style={{
                  top: '-8px',
                  left: '-8px',
                  width: '24px',
                  height: '24px',
                }}
              ></div>
            </div>
            <div>
              <div className="placeholder rounded-3 mb-1" style={{ height: '18px', width: '180px' }}></div>
              <div className="placeholder rounded-3" style={{ height: '14px', width: '80px' }}></div>
            </div>
          </div>

          {/* Price Skeleton */}
          <div className="text-end">
            <div className="placeholder rounded-3" style={{ height: '18px', width: '80px' }}></div>
          </div>
        </div>
      </div >

      {/* Coupon Input Skeleton */}
      < div className="placeholder-glow" >
        <div className="placeholder rounded-3" style={{ height: '48px', width: '100%' }}></div>
      </div >

      {/* Notes Skeleton */}
      {
        [1, 2].map((_, i) => (
          <div key={i} className="border rounded p-3 bg-white placeholder-glow">
            <div className="d-flex justify-content-start align-items-center gap-2">
              <div className="placeholder rounded-circle" style={{ width: '20px', height: '20px' }}></div>
              <div className="flex-grow-1">
                <div className="placeholder rounded-3" style={{ height: '14px', width: '85%' }}></div>
              </div>
            </div>
          </div>
        ))
      }

      {/* Divider */}
      <hr className="my-2" />

      {/* Totals Section Skeleton */}
      <div className="d-flex flex-column gap-3 placeholder-glow">
        <div className="d-flex justify-content-between align-items-center">
          <div className="placeholder rounded-3" style={{ height: '16px', width: '100px' }}></div>
          <div className="placeholder rounded-3" style={{ height: '16px', width: '80px' }}></div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="placeholder rounded-3" style={{ height: '16px', width: '60px' }}></div>
          <div className="placeholder rounded-3" style={{ height: '16px', width: '70px' }}></div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="placeholder rounded-3" style={{ height: '16px', width: '70px' }}></div>
          <div className="placeholder rounded-3" style={{ height: '16px', width: '65px' }}></div>
        </div>

        {/* Final Total Skeleton */}
        <div className="border-top pt-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="placeholder rounded-3" style={{ height: '20px', width: '100px' }}></div>
            <div className="d-flex align-items-center gap-2">
              <div className="placeholder rounded-3" style={{ height: '24px', width: '120px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div >
    </div>
  );
}

export default ShimmerCart;