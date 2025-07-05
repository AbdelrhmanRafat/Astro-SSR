import "../../styles/global.css";
import React, { useState, useEffect } from 'react';
import ShimmerLoader from "./ShimmerLoader";
import ShippingForm from "./ShippingForm";
import CartItems from "./CartItems";

const ShoppingCartUI = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    // dir="rtl" Here is very Important....
    <div dir="rtl" className="min-vh-100 bg-light">
      <div className="container-fluid">
        {isLoading ? (
          <ShimmerLoader />
        ) : (
          <div className="row g-0">
            {/* Shipping Form */}
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <ShippingForm />
            </div>

            {/* Cart Items */}
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <CartItems />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartUI;