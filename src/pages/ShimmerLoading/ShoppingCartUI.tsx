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
      <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center py-5">
                  <div className="mb-4">
                    <i className="bi bi-exclamation-triangle text-danger" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h2 className="h4 fw-bold text-danger mb-3">خطأ في تحميل المنتجات</h2>
                  <p className="text-muted mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="btn btn-danger px-4 py-2"
                  >
                    إعادة المحاولة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-vh-100 bg-light">
      <div className="container-fluid">
        {isLoading ? (
          <ShimmerLoader />
        ) : (
          <div className="row g-0">
            {/* Shipping Form */}
            <div className="col-12 col-lg-8 order-2 order-lg-1">
              <ShippingForm />
            </div>

            {/* Cart Items */}
            <div className="col-12 col-lg-4 order-1 order-lg-2">
              <CartItems />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartUI;