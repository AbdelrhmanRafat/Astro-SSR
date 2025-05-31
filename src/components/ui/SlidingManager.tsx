import React, { useEffect, useRef, useState } from "react";

interface CartItem {
  productId: string;
  title: string;
  image: string;
  price: number;
}

interface CartPanelProps {
  open: boolean;
  onClose: () => void;
}

const CartPanel: React.FC<CartPanelProps> = ({ open, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(open);
  const [animateIn, setAnimateIn] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Mount/unmount animation
  useEffect(() => {
    if (open) {
      setShouldRender(true);
      requestAnimationFrame(() => setAnimateIn(true));
      // Load cart items from localStorage when opening
      const stored = localStorage.getItem("cartItems");
      if (stored) {
        setCartItems(JSON.parse(stored));
      } else {
        setCartItems([]);
      }
    } else {
      setAnimateIn(false);
      const timeout = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (open && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={panelRef}
        className={`
          relative w-80 max-h-full p-6 shadow-lg bg-white text-black overflow-y-auto
          transform transition-transform duration-500 ease-in-out
          ${animateIn ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">🛒 Your Cart</h3>
          <button onClick={onClose} className="text-2xl font-bold">&times;</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {cartItems.map(item => (
              <li key={item.productId} className="flex items-center gap-4 border-b pb-2">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex flex-col flex-grow">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-green-600 font-bold">${item.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPanel;