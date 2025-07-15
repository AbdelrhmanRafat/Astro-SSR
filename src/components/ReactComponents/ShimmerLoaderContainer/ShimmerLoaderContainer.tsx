/**
 * @file ShimmerLoaderContainer.tsx
 * @description A container component that orchestrates the display of shimmer loading placeholders for the checkout form and cart.
 *
 * @component
 * @returns {JSX.Element} The rendered shimmer loader container.
 *
 * @logic
 * - This component arranges the `ShimmerForm` and `ShimmerCart` components in a two-column layout, similar to the main `ChckoutContainer`.
 * - The layout is responsive, with the order of the columns changing on different screen sizes.
 * - The `ShimmerCart` is hidden on smaller screens (d-none d-lg-block).
 *
 * @integration
 * - This component is used by `ChckoutContainer` to display a loading state while the actual checkout content is being prepared.
 * - It directly depends on the `ShimmerForm` and `ShimmerCart` components.
 */
import React from 'react';
import ShimmerForm from '../shimmerForm/shimmerForm';
import ShimmerCart from '../ShimmerCart/ShimmerCart';

const ShimmerLoaderContainer = () => {
  return (
    <div dir="rtl" className="bg-white">
      <div className="w-100">
        <div className="row g-0">
          {/* ✅ Shimmer Form Placeholder */}
          <div className="col-12 col-lg-6 order-2 order-lg-1 bg-white">
            <ShimmerForm />
          </div>

          {/* ✅ Shimmer Cart Placeholder */}
          <div className="col-12 col-lg-6 order-1 order-lg-2 d-none d-lg-block" style={{ backgroundColor: "#F3F4F5" }}>
            <ShimmerCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerLoaderContainer;