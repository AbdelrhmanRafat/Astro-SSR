/**
 * @file ShimmerForm.tsx
 * @description A shimmer loading placeholder component for the checkout form.
 * It mimics the layout of the `CheckoutForm` to provide a visual cue that the form is loading.
 *
 * @component
 * @returns {JSX.Element} The rendered shimmer form component.
 *
 * @logic
 * - The component is composed of static placeholder elements that are styled to resemble the actual form fields.
 * - It uses a shimmer animation, defined in `shimmerForm.css`, to create a loading effect.
 * - The layout includes placeholders for all major sections of the checkout form, including:
 *   - Contact Information
 *   - Shipping Address
 *   - Payment Options
 *   - Delivery Options
 *   - Action Buttons
 *
 * @integration
 * - This component is used within the `ShimmerLoaderContainer` to represent the loading state of the form.
 * - It is intended to be displayed alongside the `ShimmerCart` component to create a complete shimmer loading screen.
 */
import React from 'react';
import './shimmerForm.css';

const ShimmerForm = () => {
  return (
    <div className="h-100 d-flex flex-column gap-3 pt-2 pt-md-0">
      <div className="container-lg w-100 px-0 px-md-3 mx-0 mx-md-auto row">
        <div className="d-flex justify-content-center justify-content-md-end align-items-center p-md-3">

          <form className="d-flex flex-column gap-4 col-lg-9 col-12">
            {/* معلومات التواصل Skeleton */}
            <div className="d-flex flex-column gap-2">
              <div className="placeholder-glow">
                <div className="placeholder rounded fw-bold shimmerform-placeholder-24-150"></div>
              </div>
              <div className="placeholder-glow">
                <div className="placeholder rounded shimmerform-placeholder-58"></div>
              </div>
            </div>

            {/* عنوان الشحن Skeleton */}
            <div className="d-flex flex-column gap-2">
              <div className="placeholder-glow">
                <div className="placeholder rounded fw-bold shimmerform-placeholder-24-120"></div>
              </div>

              {/* البلد Skeleton */}
              <div className="placeholder-glow">
                <div className="placeholder rounded shimmerform-placeholder-58"></div>
              </div>

              {/* الاسم الأول والاسم الثاني Skeleton */}
              <div className="row g-2 g-md-3">
                <div className="col-md-6 col-12">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded shimmerform-placeholder-58"></div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded shimmerform-placeholder-58"></div>
                  </div>
                </div>
              </div>

              {/* العنوان Skeleton */}
              <div className="placeholder-glow">
                <div className="placeholder rounded shimmerform-placeholder-58"></div>
              </div>

              {/* المدينة والمحافظة Skeleton */}
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded shimmerform-placeholder-58"></div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="placeholder-glow">
                    <div className="placeholder rounded shimmerform-placeholder-58"></div>
                  </div>
                </div>
              </div>

              {/* رقم الموبايل Skeleton */}
              <div className="w-100">
                <div className="placeholder-glow">
                  <div className="d-flex align-items-center justify-content-between border rounded-3 px-2 shimmerform-placeholder-58">
                    <div className="placeholder rounded flex-grow-1 shimmerform-placeholder-40"></div>
                    <div className="flex-shrink-0">
                      <div className="placeholder rounded shimmerform-placeholder-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* خيارات الدفع Skeleton */}
            <div className="d-flex flex-column gap-2">
              <div className="placeholder-glow">
                <div className="placeholder rounded fw-bold shimmerform-placeholder-24-120"></div>
              </div>
              <div className="d-flex flex-column gap-3">
                {/* بطاقة ائتمان Skeleton */}
                <div className="border rounded p-3 d-flex gap-3 align-items-start placeholder-glow">
                  <div className="placeholder rounded-circle mt-1" style={{width: '16px', height: '16px'}}></div>
                  <div className="flex-grow-1 ms-2">
                    <div className="placeholder rounded mb-2" style={{height: '18px', width: '120px'}}></div>
                    <div className="placeholder rounded mb-2" style={{height: '14px', width: '280px'}}></div>
                    <div className="d-flex gap-2 flex-wrap">
                      <div className="placeholder rounded" style={{width: '30px', height: '20px'}}></div>
                      <div className="placeholder rounded" style={{width: '30px', height: '20px'}}></div>
                      <div className="placeholder rounded" style={{width: '30px', height: '20px'}}></div>
                    </div>
                  </div>
                </div>

                {/* الدفع عند الاستلام Skeleton */}
                <div className="border rounded p-3 d-flex gap-3 align-items-start placeholder-glow">
                  <div className="placeholder rounded-circle mt-1" style={{width: '16px', height: '16px'}}></div>
                  <div className="flex-grow-1 ms-2">
                    <div className="placeholder rounded mb-2" style={{height: '18px', width: '140px'}}></div>
                    <div className="placeholder rounded" style={{height: '14px', width: '180px'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* خيارات التوصيل Skeleton */}
            <div className="d-flex flex-column gap-2">
              <div className="placeholder-glow">
                <div className="placeholder rounded fw-bold shimmerform-placeholder-24-120"></div>
              </div>
              <div className="d-flex flex-column gap-3">
                {/* توصيل إلى المنزل Skeleton */}
                <div className="border rounded p-3 d-flex gap-3 align-items-start placeholder-glow">
                  <div className="placeholder rounded-circle mt-1" style={{width: '16px', height: '16px'}}></div>
                  <div className="flex-grow-1 ms-2">
                    <div className="placeholder rounded mb-2" style={{height: '18px', width: '120px'}}></div>
                    <div className="placeholder rounded" style={{height: '14px', width: '220px'}}></div>
                  </div>
                </div>

                {/* الاستلام من المتجر Skeleton */}
                <div className="border rounded p-3 d-flex gap-3 align-items-start placeholder-glow">
                  <div className="placeholder rounded-circle mt-1" style={{width: '16px', height: '16px'}}></div>
                  <div className="flex-grow-1 ms-2">
                    <div className="placeholder rounded mb-2" style={{height: '18px', width: '140px'}}></div>
                    <div className="placeholder rounded" style={{height: '14px', width: '200px'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* الأزرار Skeleton */}
            <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center gap-3 mb-md-0 mb-4">
              {/* زر العودة Skeleton */}
              <div className="placeholder-glow">
                <div className="placeholder rounded shimmerform-placeholder-40-140"></div>
              </div>

              {/* زر المتابعة Skeleton */}
              <div className="placeholder-glow">
                <div className="placeholder rounded shimmerform-placeholder-56-160"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShimmerForm;