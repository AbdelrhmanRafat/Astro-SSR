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
        console.log('Starting to fetch products...');
        
        // Add delay to see shimmer effect (remove in production)
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        const fetchedProducts = await getAllProducts(1);
        console.log('Products fetched successfully:', fetchedProducts);
        
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

  // Reset loading state for demo
  const handleResetLoading = () => {
    setIsLoading(true);
    setProductData(null);
    setError(null);
    
    // Re-fetch products
    setTimeout(async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const fetchedProducts = await getAllProducts(1);
        setProductData(fetchedProducts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ في تحميل المنتجات');
      } finally {
        setIsLoading(false);
      }
    }, 100);
  };

  // Extract products array from ProductRoot
  const products: Product[] = productData?.data || [];

  // Error state
  if (error && !isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 p-4" dir="rtl">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-800 mb-2">خطأ في تحميل المنتجات</h2>
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={handleResetLoading}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
    <div className="min-h-screen bg-gray-100 p-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* Demo Control Button & Debug Info */}
        <div className="mb-6 text-center">
          <div className="mb-4 p-2 bg-blue-50 border border-blue-200 rounded text-sm">
            <strong>Debug:</strong> Loading: {isLoading.toString()}, Products: {products.length}, Error: {(!!error).toString()}
          </div>
          <button 
            onClick={handleResetLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            اختبار تأثير التحميل
          </button>
        </div>

        {/* Main Content */}
        {isLoading ? (
          <ShimmerLoader />
        ) : (
          <div className="flex flex-col md:flex-row gap-3 justify-center items-center md:items-start">
            
            {/* Right Sidebar - Forms and Order Summary */}
            <div className="w-full md:w-1/2">
              <ShippingForm 
              />
            </div>

            {/* Left Side - Cart Items */}
            <div className="w-full md:w-1/2 md:sticky md:top-0 md:self-start">
              <CartItems  />
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartUI;