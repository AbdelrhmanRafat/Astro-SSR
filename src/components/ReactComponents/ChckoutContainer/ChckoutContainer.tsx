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