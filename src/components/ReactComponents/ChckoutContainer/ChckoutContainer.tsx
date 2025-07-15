/**
 * @file ChckoutContainer.tsx
 * @description This component serves as the main container for the entire checkout process.
 * It orchestrates the display of different components based on the loading state and the number of products in the cart.
 *
 * @component
 * @returns {JSX.Element} The rendered ChckoutContainer component.
 *
 * @logic
 * - The component uses the `useState` hook to manage an `isLoading` state, which is initially true.
 * - The `useEffect` hook simulates a loading period with a `setTimeout` of 2 seconds. After this period, `isLoading` is set to false.
 * - It subscribes to a `useCartStore` to get the `numberOfProducts` in the cart.
 * - Conditionally renders components based on the `isLoading` and `numberOfProducts` states:
 *   - If `isLoading` is true, it displays the `ShimmerLoaderContainer` component.
 *   - If `isLoading` is false, it checks the number of products:
 *     - If there are no products (`numberOfProducts` is 0 or undefined), it renders the `ProductOutOfStock` component.
 *     - Otherwise, it renders the main checkout layout, which consists of the `CheckoutForm` and `CheckoutCart` components.
 *
 * @integration
 * - This is the primary component for the checkout page, designed to be used as the main entry point in an Astro page.
 * - It directly depends on the following components:
 *   - `ShimmerLoaderContainer`: For displaying a loading state.
 *   - `ProductOutOfStock`: For displaying a message when the cart is empty.
 *   - `CheckoutForm`: The form for user shipping and payment details.
 *   - `CheckoutCart`: The component that displays the items in the cart.
 * - The layout is a two-column grid, with the form on one side and the cart on the other. The order of these columns changes based on the screen size (from `order-2` on small screens to `order-lg-1` on large screens).
 */
import "../../../styles/global.css";
import "./ChckoutContainer.css";
import React, { useState, useEffect } from "react";
import { useCartStore } from "../../../lib/Stores/cartStore";
import ProductOutOfStock from "../ProductOutOfStock/ProductOutOfStock";
import ShimmerLoaderContainer from "../ShimmerLoaderContainer/ShimmerLoaderContainer";
import CheckoutCart from "../CheckoutCart/CheckoutCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const ChckoutContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { numberOfProducts } = useCartStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div dir="rtl" className="bg-white">
      <div className="w-100">
        {isLoading ? (
          <ShimmerLoaderContainer />
        ) : (
          <div className="row g-0">
            {/* Shipping Form */}
            <div className="col-12 col-lg-6 order-2 order-lg-1 bg-white">
              {numberOfProducts === 0 || numberOfProducts === undefined ? (
                <ProductOutOfStock />
              ) : (
                <CheckoutForm />
              )}
            </div>

            {/* Cart */}
            <div className="col-12 col-lg-6 order-1 order-lg-2 shoppingcartui-cart-bg">
              <CheckoutCart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChckoutContainer;