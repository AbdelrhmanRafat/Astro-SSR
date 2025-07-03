// 📁 ShimmerForm.jsx
import React from 'react';

const ShimmerForm = () => {
  return (
    <form className="container-fluid min-vh-md-100">
      <div className="row">
        {/* Sidebar - hidden on small screens */}
        <div className="d-none d-md-flex col-md-2 flex-column justify-content-center align-items-center p-3 p-md-5" />

        {/* Main Form Content Skeleton */}
        <div className="col-12 col-md-10 d-flex flex-column justify-content-start align-items-start gap-2 gap-md-3 p-3 p-md-5">

          {/* Contact Info Skeleton */}
          <div className="w-100 d-flex flex-column align-items-start gap-2">
            <div className="placeholder rounded placeholder-glow" style={{height: '24px', width: '150px'}}></div>
            <div className="w-100 placeholder-glow">
              <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
            </div>
          </div>

          {/* Shipping Address Skeleton */}
          <div className="w-100 d-flex flex-column align-items-start gap-2">
            <div className="placeholder rounded placeholder-glow" style={{height: '24px', width: '120px'}}></div>

            {/* Country Select Skeleton */}
            <div className="w-100 w-md-50 placeholder-glow">
              <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
            </div>

            {/* First/Last Name Skeleton - Always Row Layout */}
            <div className="d-flex flex-row justify-content-between align-items-stretch gap-2 w-100">
              <div className="w-50 placeholder-glow">
                <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
              </div>
              <div className="w-50 placeholder-glow">
                <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
              </div>
            </div>

            {/* Address Skeleton */}
            <div className="w-100 placeholder-glow">
              <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
            </div>

            {/* City/Governorate Skeleton - Always Row Layout */}
            <div className="d-flex flex-row justify-content-between align-items-stretch gap-2 w-100">
              <div className="w-50 placeholder-glow">
                <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
              </div>
              <div className="w-50 placeholder-glow">
                <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
              </div>
            </div>

            {/* Mobile Number Skeleton */}
            <div className="w-100 placeholder-glow">
              <div className="d-flex align-items-center justify-content-between border rounded-3 px-3 py-2" style={{height: '58px'}}>
                <div className="placeholder rounded flex-grow-1" style={{height: '40px'}}></div>
                <div className="ms-3 flex-shrink-0">
                  <div className="placeholder rounded" style={{width: '20px', height: '20px'}}></div>
                </div>
              </div>
            </div>

            {/* Actions Skeleton */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 gap-2 pt-3">
              <div className="placeholder rounded placeholder-glow" style={{height: '20px', width: '120px'}}></div>
              <div className="placeholder rounded placeholder-glow" style={{height: '42px', width: '160px'}}></div>
            </div>

          </div>
        </div>
      </div>
    </form>
  );
}

export default ShimmerForm;