import React from 'react';

const ShimmerLoader = () => {
  // Shimmer skeleton components
  const ProductItemSkeleton = () => (
    <div className="d-flex align-items-center gap-3 p-3 bg-light rounded placeholder-glow">
      <div className="placeholder rounded" style={{width: '64px', height: '64px'}}></div>
      <div className="flex-grow-1">
        <div className="placeholder rounded mb-2" style={{height: '16px', width: '75%'}}></div>
        <div className="placeholder rounded" style={{height: '12px', width: '50%'}}></div>
      </div>
      <div className="text-end">
        <div className="placeholder rounded mb-1" style={{height: '20px', width: '80px'}}></div>
        <div className="placeholder rounded" style={{height: '12px', width: '64px'}}></div>
      </div>
    </div>
  );

  const FormFieldSkeleton = () => (
    <div className="placeholder-glow">
      <div className="placeholder rounded mb-2" style={{height: '16px', width: '33%'}}></div>
      <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
    </div>
  );

  return (
    <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center align-items-md-start">
      
{/* Right Sidebar Skeleton - Combined Form */}
      <div className="w-100">
        
        {/* Combined Personal Info & Shipping Form Skeleton */}
        <section className="bg-white rounded shadow-sm p-4 mb-4 d-flex flex-column justify-content-start align-items-start gap-3">
          {/* Contact Info Header */}
          <div className="placeholder rounded placeholder-glow" style={{height: '24px', width: '33%'}}></div>
          
          {/* Contact Info Fields */}
          <div className="d-flex flex-column gap-3 w-100">
            <div className="placeholder-glow">
              <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
            </div>
            <div className="d-flex align-items-center gap-2 placeholder-glow">
              <div className="placeholder rounded" style={{height: '16px', width: '16px'}}></div>
              <div className="placeholder rounded" style={{height: '16px', width: '66%'}}></div>
            </div>
          </div>

          {/* Shipping Address Header */}
          <div className="placeholder rounded placeholder-glow mt-3" style={{height: '24px', width: '25%'}}></div>
          
          {/* Shipping Address Fields */}
          <div className="d-flex flex-column gap-3 w-100">
            {/* Country Field */}
            <div className="placeholder-glow">
              <div className="placeholder rounded mb-2" style={{height: '16px', width: '25%'}}></div>
              <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
            </div>
            
            {/* Name Fields Grid */}
            <div className="row g-3">
              <div className="col-6">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-2" style={{height: '16px', width: '60%'}}></div>
                  <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
                </div>
              </div>
              <div className="col-6">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-2" style={{height: '16px', width: '60%'}}></div>
                  <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
                </div>
              </div>
            </div>
            
            {/* Address Field */}
            <div className="placeholder-glow">
              <div className="placeholder rounded mb-2" style={{height: '16px', width: '30%'}}></div>
              <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
            </div>
            
            {/* City & Governorate - Responsive Grid */}
            <div className="d-flex flex-md-row flex-column justify-content-center w-100 align-items-center gap-3">
              <div className="w-100">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-2" style={{height: '16px', width: '40%'}}></div>
                  <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
                </div>
              </div>
              <div className="w-100">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-2" style={{height: '16px', width: '40%'}}></div>
                  <div className="placeholder rounded" style={{height: '40px', width: '100%'}}></div>
                </div>
              </div>
            </div>
            
            {/* Phone Field with Icon */}
            <div className="placeholder-glow">
              <div className="placeholder rounded position-relative" style={{height: '40px', width: '100%'}}>
                <div className="position-absolute start-0 top-50 translate-middle-y ms-3 placeholder rounded" style={{width: '16px', height: '16px'}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Links Skeleton */}
        <div className="text-center placeholder-glow">
          <div className="d-flex justify-content-center gap-3">
            <div className="placeholder rounded" style={{height: '16px', width: '64px'}}></div>
            <div className="placeholder rounded" style={{height: '16px', width: '80px'}}></div>
            <div className="placeholder rounded" style={{height: '16px', width: '72px'}}></div>
          </div>
        </div>
      </div>

    {/* Left Side Skeleton - Cart Items */}
      <div className="w-100 sticky-md-top align-self-md-start">
        
        {/* Products List Skeleton */}
        <div className="bg-white rounded shadow-sm p-4">
          <div className="d-flex flex-column gap-3">
            
            {/* Static Products Skeleton */}
            <div className="d-flex flex-column gap-3">
              {/* Product 1 Skeleton */}
              <div className="d-flex align-items-center gap-3 p-3 border rounded placeholder-glow">
                <div className="position-relative">
                  <div className="placeholder rounded" style={{width: '64px', height: '64px'}}></div>
                  <div className="position-absolute bg-secondary rounded-circle" 
                       style={{top: '-8px', right: '-8px', width: '20px', height: '20px'}}>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="placeholder rounded mb-1" style={{height: '18px', width: '70%'}}></div>
                  <div className="placeholder rounded" style={{height: '14px', width: '40%'}}></div>
                </div>
                <div className="text-end">
                  <div className="placeholder rounded" style={{height: '20px', width: '80px'}}></div>
                </div>
              </div>

              {/* Product 2 Skeleton */}
              <div className="d-flex align-items-center gap-3 p-3 border rounded placeholder-glow">
                <div className="position-relative">
                  <div className="placeholder rounded" style={{width: '64px', height: '64px'}}></div>
                  <div className="position-absolute bg-secondary rounded-circle" 
                       style={{top: '-8px', right: '-8px', width: '20px', height: '20px'}}>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="placeholder rounded mb-1" style={{height: '18px', width: '70%'}}></div>
                  <div className="placeholder rounded" style={{height: '14px', width: '40%'}}></div>
                </div>
                <div className="text-end">
                  <div className="placeholder rounded" style={{height: '20px', width: '80px'}}></div>
                </div>
              </div>
            </div>

            {/* Action Buttons Skeleton */}
            <div className="d-flex gap-3 mt-4">
              <div className="placeholder rounded flex-fill placeholder-glow" style={{height: '38px'}}></div>
              <div className="placeholder rounded flex-fill placeholder-glow" style={{height: '38px'}}></div>
            </div>

            {/* Shipping Info Skeleton */}
            <div className="bg-light p-3 rounded mt-3 placeholder-glow">
              <div className="placeholder rounded" style={{height: '14px', width: '85%'}}></div>
              <div className="placeholder rounded mt-2" style={{height: '14px', width: '65%'}}></div>
            </div>

            {/* Discount Info Skeleton */}
            <div className="text-center placeholder-glow">
              <div className="placeholder rounded mx-auto" style={{height: '14px', width: '180px'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerLoader;