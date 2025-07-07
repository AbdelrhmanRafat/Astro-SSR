import "../../../styles/global.css";
import "./ShoppingCartUI.css";
import React, { useState, useEffect } from 'react';
import ShimmerLoader from "../ShimmerLoader/ShimmerLoader";
import ShippingForm from "../ShippingForm/ShippingForm";
import Cart from "../Cart/Cart";


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
    <div dir="rtl" className="bg-white">
      <div className="w-100">
        {isLoading ? (
          <ShimmerLoader />
        ) : (
          <div className="row g-0">
            {/* Shipping Form */}
            <div className="col-12 col-lg-6 order-2 order-lg-1 bg-white">
              <ShippingForm />
            </div>

            {/* Cart  */}
            <div className="col-12 col-lg-6 order-1 order-lg-2 shoppingcartui-cart-bg">
             <Cart />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartUI;