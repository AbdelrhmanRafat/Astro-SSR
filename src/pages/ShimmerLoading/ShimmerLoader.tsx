import React from 'react';

const ShimmerLoader = () => {
  // Shimmer skeleton components

  return (
    <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center align-items-md-start">

      {/* Right Sidebar Skeleton - Combined Form */}
      <div className="w-100">
        {/* Form Skeleton */}
        <div className="w-100 d-flex flex-column justify-content-start align-items-center gap-3">

          {/* Note Box Skeleton */}
          <div className="w-100 border border-black border-1 rounded p-3 d-flex justify-content-start align-items-center gap-2 placeholder-glow">
            {/* Icon Skeleton */}
            <div
              className="placeholder rounded-circle"
              style={{ width: '20px', height: '20px' }}
            ></div>

            {/* Message Skeleton */}
            <div className="flex-grow-1">
              <div className="placeholder rounded" style={{ height: '14px', width: '85%' }}></div>
            </div>
          </div>

          {/* Contact Info Section Skeleton */}
          <div className="w-100 d-flex flex-column align-items-start gap-2">
            {/* Section Header */}
            <div className="placeholder rounded placeholder-glow" style={{ height: '24px', width: '150px' }}></div>

            {/* Email/Phone Input */}
            <div className="w-100 placeholder-glow">
              <div className="placeholder rounded mb-1" style={{ height: '14px', width: '140px' }}></div>
              <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
            </div>

            {/* Newsletter Checkbox */}
            <div className="d-flex align-items-center gap-2 placeholder-glow">
              <div className="placeholder rounded" style={{ width: '16px', height: '16px' }}></div>
              <div className="placeholder rounded" style={{ height: '14px', width: '150px' }}></div>
            </div>
          </div>

          {/* Shipping Address Section Skeleton */}
          <div className="w-100 d-flex flex-column align-items-start gap-2">
            {/* Section Header */}
            <div className="placeholder rounded placeholder-glow" style={{ height: '24px', width: '120px' }}></div>

            {/* Country Field */}
            <div className="w-100 placeholder-glow">
              <div className="placeholder rounded mb-1" style={{ height: '14px', width: '40px' }}></div>
              <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
            </div>

            {/* Name Fields Row */}
            <div className="row w-100 g-3">
              <div className="col-12 col-md-6">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-1" style={{ height: '14px', width: '80px' }}></div>
                  <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-1" style={{ height: '14px', width: '80px' }}></div>
                  <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
                </div>
              </div>
            </div>

            {/* Address Field */}
            <div className="w-100 placeholder-glow">
              <div className="placeholder rounded mb-1" style={{ height: '14px', width: '60px' }}></div>
              <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
            </div>

            {/* City & Governorate Row */}
            <div className="row w-100 g-3">
              <div className="col-12 col-md-6">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-1" style={{ height: '14px', width: '50px' }}></div>
                  <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="placeholder-glow">
                  <div className="placeholder rounded mb-1" style={{ height: '14px', width: '60px' }}></div>
                  <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
                </div>
              </div>
            </div>

            {/* Postal Code Field */}
            <div className="w-100 placeholder-glow">
              <div className="placeholder rounded mb-1" style={{ height: '14px', width: '140px' }}></div>
              <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
            </div>

            {/* Phone Field with Icon */}
            <div className="w-100 position-relative placeholder-glow">
              <div className="placeholder rounded mb-1" style={{ height: '14px', width: '220px' }}></div>
              <div className="placeholder rounded" style={{ height: '38px', width: '100%' }}></div>
              {/* Icon placeholder inside input */}
              <div
                className="position-absolute start-0 top-50 translate-middle-y ps-3 placeholder rounded"
                style={{ width: '16px', height: '16px', marginTop: '7px' }}
              ></div>
            </div>

            {/* Save Info Checkbox */}
            <div className="d-flex align-items-center gap-2 placeholder-glow">
              <div className="placeholder rounded" style={{ width: '16px', height: '16px' }}></div>
              <div className="placeholder rounded" style={{ height: '14px', width: '180px' }}></div>
            </div>

            {/* Bottom Action Buttons */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 gap-3 pt-2">
              <div className="placeholder rounded placeholder-glow" style={{ height: '16px', width: '120px' }}></div>
              <div className="placeholder rounded placeholder-glow" style={{ height: '40px', width: '160px' }}></div>
            </div>
          </div>

        </div>
      </div>
      {/* Left Side Skeleton - Cart Items */}
      <div className="w-100 sticky-md-top align-self-md-start">
        {/* Products List Skeleton */}
        <div className="bg-white rounded shadow-sm md:p-4 md:w-75">
          <div className="d-flex flex-column gap-3">

            {/* Static Products Skeleton */}
            <div className="d-flex flex-column gap-3">
              {/* Product 1 Skeleton */}
              <div className="d-flex justify-content-between align-items-center gap-3 placeholder-glow">
                {/* Left Side: Product Image + Info Skeleton */}
                <div className="d-flex align-items-center gap-3">
                  {/* Image + Quantity Badge Skeleton */}
                  <div className="position-relative">
                    <div
                      className="placeholder rounded"
                      style={{ width: '64px', height: '64px' }}
                    ></div>
                    <div
                      className="position-absolute bg-secondary rounded-circle"
                      style={{
                        top: '-8px',
                        left: '-8px',
                        width: '20px',
                        height: '20px'
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
                  <div className="placeholder rounded" style={{ height: '20px', width: '90px' }}></div>
                </div>
              </div>
            </div>

            {/* Coupon Input Skeleton */}
            <div className="placeholder-glow">
              <div className="placeholder rounded" style={{ height: '42px', width: '100%' }}></div>
            </div>

            {/* Shipping Info Skeleton (2 identical blocks) */}
            <div className="border border-white border-2 rounded p-3 placeholder-glow">
              <div className="d-flex justify-content-start align-items-center gap-2">
                {/* Icon Skeleton */}
                <div
                  className="placeholder rounded-circle"
                  style={{ width: '20px', height: '20px' }}
                ></div>

                {/* Message Skeleton */}
                <div className="flex-grow-1">
                  <div className="placeholder rounded" style={{ height: '14px', width: '85%' }}></div>
                </div>
              </div>
            </div>

            <div className="border border-white border-2 rounded p-3 placeholder-glow">
              <div className="d-flex justify-content-start align-items-center gap-2">
                {/* Icon Skeleton */}
                <div
                  className="placeholder rounded-circle"
                  style={{ width: '20px', height: '20px' }}
                ></div>

                {/* Message Skeleton */}
                <div className="flex-grow-1">
                  <div className="placeholder rounded" style={{ height: '14px', width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Price Summary Skeleton */}
            <div className="w-100 d-flex flex-column gap-2 placeholder-glow" dir="rtl">
              {/* Subtotal Skeleton */}
              <div className="d-flex justify-content-between">
                <div className="placeholder rounded" style={{ height: '16px', width: '100px' }}></div>
                <div className="placeholder rounded" style={{ height: '16px', width: '120px' }}></div>
              </div>

              {/* Shipping Skeleton */}
              <div className="d-flex justify-content-between">
                <div className="placeholder rounded" style={{ height: '16px', width: '60px' }}></div>
                <div className="placeholder rounded" style={{ height: '16px', width: '100px' }}></div>
              </div>

              {/* Total Skeleton */}
              <div className="d-flex justify-content-between">
                <div className="placeholder rounded" style={{ height: '16px', width: '80px' }}></div>
                <div className="d-flex align-items-center gap-2">
                  <div className="placeholder rounded" style={{ height: '16px', width: '130px' }}></div>
                  <div className="placeholder rounded" style={{ height: '12px', width: '30px' }}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ShimmerLoader;