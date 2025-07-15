/**
 * @file CheckoutCartItems.tsx
 * @description This component renders the list of items in the shopping cart.
 * It allows users to increment, decrement, and delete items from the cart.
 *
 * @component
 * @returns {JSX.Element} The rendered list of cart items.
 *
 * @logic
 * - The component maintains a local state `cart` which is initialized with mock product data.
 * - It uses `useState` to manage the state of deleting and updating items (`deletingId`, `updatingId`) to provide visual feedback.
 * - It uses the `useCartStore` to update the global state for `totalPrice` and `numberOfProducts` whenever the local `cart` state changes.
 * - `incrementQty`, `decrementQty`, and `deleteItem` are memoized functions (`useCallback`) that handle the logic for modifying the cart. They include a `setTimeout` to simulate an asynchronous operation.
 * - The component maps over the `cart` array to render each item with its details, including an image, name, price, and quantity controls.
 * - It provides visual feedback during updates, such as a fade-out animation on deletion and spinners on quantity changes.
 *
 * @integration
 * - This component is intended to be used within the `CheckOutOrderSummary` component.
 * - It relies on the `useCartStore` to propagate changes to the total price and number of products to other components.
 * - The initial state of the cart is hardcoded in this component. In a real application, this data would likely come from a prop or be fetched from an API.
 */
import React, { useState, useCallback, useEffect } from "react";
import "./CheckoutCartItems.css";
import { useCartStore } from "../../../lib/Stores/cartStore";

interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  image: string;
  quantity: number;
  maxQty: number;
}

const CheckoutCartItems: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([
    {
      id: 1,
      name: "كوفي كورنر 40×120سم - LOG674",
      code: "CODE123",
      price: 150,
      image:
        "https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg",
      quantity: 2,
      maxQty: 4,
    },
    {
      id: 2,
      name: "مكتب خشب طبيعي مودرن - MOD222",
      code: "CODE456",
      price: 250,
      image:
        "https://www.hokybo.com/CompanyData/Product/12MD011C(HG).jpg?09-03-2024%2014:26:56",
      quantity: 1,
      maxQty: 10,
    },
  ]);

  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const { setTotalPrice, setNumberOfProducts } = useCartStore(); // Zustand actions

  // Update total price and number of products every time cart changes
  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

    setTotalPrice(total);
    setNumberOfProducts(totalQty);
  }, [cart, setTotalPrice, setNumberOfProducts]);

  const incrementQty = useCallback((id: number) => {
    setUpdatingId(id);
    setTimeout(() => {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id && item.quantity < item.maxQty
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setUpdatingId(null);
    }, 150);
  }, []);

  const decrementQty = useCallback((id: number) => {
    setUpdatingId(id);
    setTimeout(() => {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      setUpdatingId(null);
    }, 150);
  }, []);

  const deleteItem = useCallback((id: number) => {
    setDeletingId(id);
    setTimeout(() => {
      setCart((prev) => prev.filter((item) => item.id !== id));
      setDeletingId(null);
    }, 400);
  }, []);

  return (
    <div className="d-flex flex-column gap-3">
      {cart.map((item) => (
        <div
          key={item.id}
          className={`d-flex justify-content-between align-items-center py-2 border-bottom ${deletingId === item.id ? "fade-out" : ""
            }`}
        >
          {/* Product Info */}
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-3 shadow-sm"
                style={{
                  width: "64px",
                  height: "64px",
                  objectFit: "cover",
                }}
              />
              <span
                className={`position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm ${updatingId === item.id ? "quantity-updating" : ""
                  }`}
                style={{
                  top: "-8px",
                  left: "-8px",
                  width: "24px",
                  height: "24px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                {item.quantity}
              </span>
            </div>

            <div>
              <h6 className="fw-semibold text-dark mb-1">{item.name}</h6>
              <p className="text-muted small mb-1">
                <i className="bi bi-tag me-1"></i>
                {item.code}
              </p>

              {/* Delete Button */}
              <button
                className="btn btn-link p-0 text-danger small delete-btn-enhanced"
                onClick={() => deleteItem(item.id)}
                disabled={deletingId === item.id}
                aria-label={`حذف ${item.name}`}
              >
                {deletingId === item.id ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-1"
                      style={{ width: "12px", height: "12px" }}
                      role="status"
                    >
                      <span className="visually-hidden">جاري الحذف...</span>
                    </span>
                    جاري الحذف...
                  </>
                ) : (
                  "إزالة"
                )}
              </button>

              {/* Qty Controls */}
              <div
                className="d-flex align-items-center border rounded overflow-hidden mt-1 qty-controls"
                style={{ width: "110px" }}
              >
                <button
                  className="btn btn-sm btn-light flex-fill border-end qty-btn"
                  onClick={() => decrementQty(item.id)}
                  disabled={
                    item.quantity <= 1 ||
                    deletingId === item.id ||
                    updatingId === item.id
                  }
                  aria-label="تقليل الكمية"
                >
                  {updatingId === item.id ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      style={{ width: "10px", height: "10px" }}
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </span>
                  ) : (
                    "-"
                  )}
                </button>
                <div className="flex-fill text-center small">
                  {item.quantity}
                </div>
                <button
                  className="btn btn-sm btn-light flex-fill border-start qty-btn"
                  onClick={() => incrementQty(item.id)}
                  disabled={
                    item.quantity >= item.maxQty ||
                    deletingId === item.id ||
                    updatingId === item.id
                  }
                  aria-label="زيادة الكمية"
                >
                  {updatingId === item.id ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      style={{ width: "10px", height: "10px" }}
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </span>
                  ) : (
                    "+"
                  )}
                </button>
              </div>

              {/* Max quantity warning */}
              {item.quantity >= item.maxQty && (
                <div className="text-warning small mt-1">
                  <i className="bi bi-exclamation-triangle me-1"></i>
                  الحد الأقصى: {item.maxQty} قطع
                </div>
              )}
            </div>
          </div>
          {/* Total Price */}
          <div className="d-flex justify-content-end align-items-center gap-1">
            <span className="fw-bold text-black mb-0">
              {(item.price * item.quantity).toFixed(2)}
            </span>
            <span className="text-muted">ج.م</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutCartItems;