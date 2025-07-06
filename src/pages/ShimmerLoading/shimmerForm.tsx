
import React from 'react';

const ShimmerForm = () => {
  return (
    <div className="bg-white h-100 d-flex flex-column gap-3 pt-2 pt-md-0">
      <div className="container-lg w-100 px-0 px-md-3 mx-0 mx-md-auto row">
        <div className="d-flex justify-content-center justify-content-md-end align-items-center p-md-3">

          <form className="d-flex flex-column gap-4 col-lg-9 col-12">
            {/* معلومات التواصل Skeleton */}
            <div className="d-flex flex-column gap-3">
              <div className="placeholder-glow">
                <div className="placeholder rounded fw-bold mb-3 pb-2" style={{height: '24px', width: '150px'}}></div>
              </div>
              <div className="placeholder-glow">
                <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
              </div>
            </div>

            {/* عنوان الشحن Skeleton */}
            <div className="d-flex flex-column gap-2">
              <div className="placeholder-glow">
                <div className="placeholder rounded fw-bold mb-3 border-bottom pb-2" style={{height: '24px', width: '120px'}}></div>
              </div>

              {/* البلد Skeleton */}
              <div className="placeholder-glow">
                <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
              </div>

              {/* الاسم الأول والاسم الثاني Skeleton */}
              <div className="row g-3">
                <div className="col-6">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
                  </div>
                </div>
              </div>

              {/* العنوان Skeleton */}
              <div className="placeholder-glow">
                <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
              </div>

              {/* المدينة والمحافظة Skeleton */}
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded" style={{height: '58px', width: '100%'}}></div>
                  </div>
                </div>
              </div>

              {/* رقم الموبايل Skeleton */}
              <div className="w-100">
                <div className="placeholder-glow">
              
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShimmerForm;