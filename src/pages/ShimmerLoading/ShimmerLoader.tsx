// 📁 ShimmerMain.jsx
import React from 'react';
import ShimmerForm from './shimmerForm';
import ShimmerCart from './ShimmerCart';

const ShimmerLoader = () => {
  return (
    <div className="w-100">
  <div className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-start w-100">

    {/* ✅ Shimmer Form Placeholder */}
    <div className="w-100 w-md-50 px-0">
      <ShimmerForm />
    </div>

    {/* ✅ Shimmer Cart Placeholder - Hidden on Mobile */}
    <div className="w-100 w-md-50 px-0 sticky-md-top align-self-md-start d-none d-md-block">
      <ShimmerCart />
    </div>

  </div>
</div>
  );
}

export default ShimmerLoader;