/**
 * @file ShimmerCart.tsx
 * @description A shimmer loading placeholder component for the checkout cart.
 * It mimics the layout of the `CheckoutCart` and `CheckOutOrderSummary` components to provide a seamless loading experience.
 *
 * @component
 * @returns {JSX.Element} The rendered shimmer cart component.
 *
 * @logic
 * - The component consists of a static layout with placeholder elements that have a shimmer animation.
 * - The layout includes placeholders for the cart header, product items, coupon input, notes, and the totals section.
 * - The shimmer effect is achieved using CSS animations defined in `ShimmerCart.css`.
 * - The component is only displayed on larger screens (d-lg-block).
 *
 * @integration
 * - This component is used within the `ShimmerLoaderContainer` to represent the loading state of the cart.
 * - It is intended to be displayed alongside the `shimmerForm` component to create a complete shimmer loading screen for the checkout page.
 */
import React from 'react';
import './ShimmerCart.css';

const ShimmerCart = () => {
  return (
    <div className="border-start border-2 border-light-subtle">
      <div className="shimmercart-sticky-top">
        <div className="">
          <div className="py-2 p-md-3">
            {/* Desktop content */}
            <div className="row">
              <div className="d-none mb-5 d-lg-block col-md-9 col-12">
                <div className="mb-3">
                  {/* Header Skeleton */}
                  <div className="placeholder-glow mb-3">
                    <div className="d-flex align-items-center gap-2 pb-2">
                      <div className="placeholder rounded shimmercart-placeholder-20"></div>
                      <div className="placeholder rounded shimmercart-placeholder-24-100"></div>
                    </div>
                  </div>
                </div>
                
                {/* Order Summary Content Skeleton */}
                <div className="d-flex flex-column gap-1 p-1">
                  {/* Product Items Skeleton */}
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between align-items-center p-3 rounded-3 placeholder-glow">
                      {/* Product Image & Info Skeleton */}
                      <div className="d-flex align-items-center gap-3">
                        <div className="position-relative">
                          <div className="placeholder rounded-3 shimmercart-placeholder-64"></div>
                          <div
                            className="position-absolute bg-secondary rounded-circle shimmercart-position-absolute"
                          ></div>
                        </div>
                        <div>
                          <div className="placeholder rounded-3 mb-1 shimmercart-placeholder-18-180"></div>
                          <div className="placeholder rounded-3 shimmercart-placeholder-14-80"></div>
                        </div>
                      </div>

                      {/* Price Skeleton */}
                      <div className="text-end">
                        <div className="placeholder rounded-3 shimmercart-placeholder-18-80"></div>
                      </div>
                    </div>
                  </div>

                  {/* Coupon Input Skeleton */}
                  <div className="placeholder-glow">
                    <div className="placeholder rounded-3 shimmercart-placeholder-48"></div>
                  </div>

                  {/* Notes Skeleton */}
                  {[1, 2].map((_, i) => (
                    <div key={i} className="border border-secondary rounded p-3 placeholder-glow">
                      <div className="d-flex justify-content-start align-items-center gap-2">
                        <div className="placeholder rounded-circle shimmercart-placeholder-20"></div>
                        <div className="flex-grow-1">
                          <div className="placeholder rounded-3 shimmercart-placeholder-14-85"></div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Totals Section Skeleton */}
                  <div className="d-flex flex-column gap-3 pt-3 placeholder-glow">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="placeholder rounded-3 shimmercart-placeholder-16-100"></div>
                      <div className="placeholder rounded-3 shimmercart-placeholder-16-80"></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="placeholder rounded-3 shimmercart-placeholder-16-60"></div>
                      <div className="placeholder rounded-3 shimmercart-placeholder-16-70"></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="placeholder rounded-3 shimmercart-placeholder-16-70"></div>
                      <div className="placeholder rounded-3 shimmercart-placeholder-16-65"></div>
                    </div>

                    {/* Final Total Skeleton */}
                    <div className="">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="placeholder rounded-3 shimmercart-placeholder-20-100"></div>
                        <div className="d-flex align-items-center gap-2">
                          <div className="placeholder rounded-3 shimmercart-placeholder-24-120"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerCart;