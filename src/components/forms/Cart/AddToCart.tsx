import React, { useState } from 'react';
import CartPanel from '../../ui/SlidingManager';

// Define the props that the AddToCartButton component expects
export interface Props {
  productId: string;        // Unique identifier for the product
  productTitle: string;     // Name or title of the product
  productImage: string;     // URL of the product image
  productPrice: number;     // Price of the product
}

// Time-To-Live for cart items in minutes
const TTL_MINUTES = 5;

// React Functional Component that takes in product details as props
const AddToCartButton: React.FC<Props> = ({
  productId,
  productTitle,
  productImage,
  productPrice,
}) => {
  // Local state to control whether the cart panel is open or not
  const [cartOpen, setCartOpen] = useState(false);

  // Function to remove expired items from localStorage
  const cleanExpiredItems = (items: any[]) => {
    const now = Date.now(); // Current timestamp

    // Filter out items older than TTL_MINUTES
    return items.filter((item: any) => {
      const itemAge = now - item.timestamp;
      return itemAge < TTL_MINUTES * 60 * 1000; // Convert TTL to milliseconds
    });
  };

  // Function to add the current product to the cart
  const handleAddToCart = () => {
    try {
      // Retrieve the existing cart items
      const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');

      // Clean expired items before adding
      const validItems = cleanExpiredItems(existingCart);

      // Create a new item object with timestamp
      const newItem = {
        productId,
        title: productTitle,
        image: productImage,
        price: productPrice,
        timestamp: Date.now(), // Store time of addition
      };

      // Replace any existing item with the same productId
      const updatedCart = [
        ...validItems.filter((item: any) => item.productId !== productId),
        newItem,
      ];

      // Save the updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));

      // Open the cart panel to show the user
      setCartOpen(true);
    } catch (err) {
      console.error('Error adding item to cart:', err);
    }
  };

  return (
    <>
      {/* Button to trigger add-to-cart logic */}
      <button
        onClick={handleAddToCart}
        className="mt-4 cursor-pointer w-full bg-gradient-to-r from-main to-green-600 text-white py-2 rounded-lg shadow hover:brightness-110 transition-all duration-300"
      >
        Add to Cart
      </button>

      {/* Cart sliding panel shown when cartOpen is true */}
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />
        
    </>
  );
};

// Export the component as default
export default AddToCartButton;