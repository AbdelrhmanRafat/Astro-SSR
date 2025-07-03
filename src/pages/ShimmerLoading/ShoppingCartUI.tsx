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
    <div dir="rtl" className="w-100">
      <div>
        {isLoading ? (
          <ShimmerLoader />
        ) : (
          <div dir="rtl" className="w-100">
  <div>
    {isLoading ? (
      <ShimmerLoader />
    ) : (
      <div className="w-100">
        <div className="row justify-content-center align-items-start m-0 w-100">
          
          {/* Shipping Form */}
          <div className="col-12 col-md-6 px-0">
            <ShippingForm />
          </div>

          {/* Cart Items */}
          <div className="col-12 col-md-6 px-0">
            <CartItems />
          </div>

        </div>
      </div>
    )}
  </div>
</div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartUI;