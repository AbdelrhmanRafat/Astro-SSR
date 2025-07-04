
// 📁 ShimmerMain.jsx
import React from 'react';
import ShimmerForm from './shimmerForm';
import ShimmerCart from './ShimmerCart';

const ShimmerLoader = () => {
  return (
    <div className="min-vh-100 bg-light">
      <div className="container-fluid">
        <div className="row g-0">
          {/* ✅ Shimmer Form Placeholder */}
          <div className="col-12 col-lg-8 order-2 order-lg-1">
            <ShimmerForm />
          </div>

          {/* ✅ Shimmer Cart Placeholder */}
          <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-lg-block">
            <div className="sticky-top" style={{ top: '1rem' }}>
              <ShimmerCart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerLoader;