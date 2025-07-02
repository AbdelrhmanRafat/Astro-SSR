import "../../styles/global.css";
import type { Product, ProductRoot } from "../../Models/Products";
import { getAllProducts } from "../../Services/productService";
import React, { useState, useEffect } from 'react';
import ShimmerLoader from "./ShimmerLoader";
import ShippingForm from "./ShippingForm";
import CartItems from "./CartItems";

const ShoppingCartUI = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<ProductRoot | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Fetch products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const fetchedProducts = await getAllProducts(1);
        setProductData(fetchedProducts);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'حدث خطأ في تحميل المنتجات');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);


  // Error state
  if (error && !isLoading) {
    return (
      <div className="min-vh-100 bg-light p-3">
        <div className="container-xxl">
          <div className="text-center py-5">
            <div className="bg-danger bg-opacity-10 border border-danger border-opacity-25 rounded p-4">
              <h2 className="fs-4 fw-semibold text-danger mb-2">خطأ في تحميل المنتجات</h2>
              <p className="text-danger mb-3">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-danger"
              >
                إعادة المحاولة
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl">
      <div className="position-relative w-100">
        {/* Half BG - Left (white) */}
        <div className="d-none d-md-block position-absolute top-0 start-0 w-50 h-100 bg-secondary-subtle"></div>

        {/* Half BG - Right (primary) */}
        <div className="d-none d-md-block position-absolute top-0 end-0 w-50 h-100 bg-white"></div>

        {/* Main Content Inside Container */}
        <div className="position-relative">
          <div className="container py-4">
            {isLoading ? (
              <ShimmerLoader />
            ) : (
              <div className="row g-3 justify-content-center align-items-start">
                {/* Shipping Form */}
                <div className="col-12 col-md-6">
                  <ShippingForm />
                </div>

                {/* Cart Items */}
                {/* Cart Items */}
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <div
                    className="position-sticky top-0 align-self-start p-3 w-100"
                  >
                    <CartItems />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartUI;