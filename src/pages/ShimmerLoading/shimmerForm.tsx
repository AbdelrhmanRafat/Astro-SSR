
import React from 'react';

const ShimmerForm = () => {
  return (
    <div className="bg-white min-vh-100">
      <div className="container-fluid">
        <div className="row">
          {/* Main Form Content Skeleton */}
          <div className="col-12 col-xl-10 offset-xl-1">
            <div className="py-4 py-md-5 px-3 px-md-4">
              
              {/* Contact Info Skeleton */}
              <div className="mb-5">
                <div className="placeholder-glow mb-3">
                  <div className="placeholder rounded-3 bg-secondary" style={{height: '28px', width: '150px'}}></div>
                  <div className="placeholder rounded-3 bg-light mt-2" style={{height: '2px', width: '100%'}}></div>
                </div>
                <div className="placeholder-glow">
                  <div className="placeholder rounded-3 shadow-sm" style={{height: '58px', width: '100%'}}></div>
                </div>
              </div>

              {/* Shipping Address Skeleton */}
              <div className="mb-5">
                <div className="placeholder-glow mb-3">
                  <div className="placeholder rounded-3 bg-secondary" style={{height: '28px', width: '120px'}}></div>
                  <div className="placeholder rounded-3 bg-light mt-2" style={{height: '2px', width: '100%'}}></div>
                </div>

                {/* Country Select Skeleton */}
                <div className="mb-3 placeholder-glow">
                  <div className="placeholder rounded-3 shadow-sm" style={{height: '58px', width: '100%'}}></div>
                </div>

                {/* First/Last Name Skeleton */}
                <div className="row g-3 mb-3">
                  <div className="col-6 placeholder-glow">
                    <div className="placeholder rounded-3 shadow-sm" style={{height: '58px', width: '100%'}}></div>
                  </div>
                  <div className="col-6 placeholder-glow">
                    <div className="placeholder rounded-3 shadow-sm" style={{height: '58px', width: '100%'}}></div>
                  </div>
                </div>

                {/* Address Skeleton */}
                <div className="mb-3 placeholder-glow">
                  <div className="placeholder rounded-3 shadow-sm" style={{height: '58px', width: '100%'}}></div>
                </div>

                {/* City/Governorate Skeleton */}
                <div className="row g-3 mb-3">
                  <div className="col-6 placeholder-glow">
                    <div className="placeholder rounded-3 shadow-sm" style={{height: '58px', width: '100%'}}></div>
                  </div>
                  <div className="col-6 placeholder-glow">
                    <div className="placeholder rounded-3 shadow-sm" style={{height: '58px', width: '100%'}}></div>
                  </div>
                </div>

                {/* Mobile Number Skeleton */}
                <div className="mb-4 placeholder-glow">
                  <div className="card border-2 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="placeholder rounded-3 flex-grow-1 me-3" style={{height: '40px'}}></div>
                        <div className="placeholder rounded-circle" style={{width: '24px', height: '24px'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions Skeleton */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pt-4 border-top">
                  <div className="placeholder rounded-3 placeholder-glow" style={{height: '40px', width: '160px'}}></div>
                  <div className="placeholder rounded-3 placeholder-glow" style={{height: '50px', width: '200px'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerForm;