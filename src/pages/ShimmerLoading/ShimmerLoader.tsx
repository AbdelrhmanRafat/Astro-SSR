// 📁 ShimmerMain.jsx
import React from 'react';
import ShimmerForm from './shimmerForm';
import ShimmerCart from './ShimmerCart';

const ShimmerLoader = () => {
  return (
    <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center align-items-md-start">
      <div className="w-100">
        <ShimmerForm />
      </div>
      <div className="w-100 sticky-md-top align-self-md-start">
        <ShimmerCart />
      </div>
    </div>
  );
}

export default ShimmerLoader;