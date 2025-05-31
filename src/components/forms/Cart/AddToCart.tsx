import React, { useState, useEffect } from 'react';
import CartPanel from '../../ui/SlidingManager';

export interface Props {
  productId: string;
  productTitle: string;
  productImage: string;
  productPrice: number;
}

const TTL_MINUTES = 5;

const AddToCartButton: React.FC<Props> = ({
  productId,
  productTitle,
  productImage,
  productPrice,
}) => {
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const [cartOpen, setCartOpen] = useState(false);

  // Function to clean expired items
  const cleanExpiredItems = () => {
    try {
      const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      const now = Date.now();
      const validItems = existingCart.filter((item: any) => {
        const itemAge = now - item.timestamp;
        return itemAge < TTL_MINUTES * 60 * 1000; // Convert minutes to milliseconds
      });
      
      if (validItems.length !== existingCart.length) {
        localStorage.setItem('cartItems', JSON.stringify(validItems));
      }
    } catch (err) {
      console.error('Error cleaning expired items:', err);
    }
  };

  // Clean expired items on component mount and every minute
  useEffect(() => {
    cleanExpiredItems();
    const interval = setInterval(cleanExpiredItems, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = () => {
    try {
      const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');

      const newItem = {
        productId,
        title: productTitle,
        image: productImage,
        price: productPrice,
        timestamp: Date.now(), // Add timestamp when item is added
      };

      const updatedCart = [
        ...existingCart.filter((item: any) => item.productId !== productId),
        newItem,
      ];

      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      setCartOpen(true); // فتح السلة بعد الإضافة

      setToastMessage("🛒 Product added to cart!");
      setToastType("success");
      setToastOpen(true);
    } catch (err) {
      setToastMessage("❌ Failed to add to cart.");
      setToastType("error");
      setToastOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="mt-4 cursor-pointer w-full bg-gradient-to-r from-main to-green-600 text-white py-2 rounded-lg shadow hover:brightness-110 transition-all duration-300"
      >
        Add to Cart
      </button>

      {/* لوحة السلة */}
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />

      {/* Toast Notification */}
      {/* لو تستخدم SlidingToastPanel منفصل، اعرضه هنا */}
    </>
  );
};

export default AddToCartButton;