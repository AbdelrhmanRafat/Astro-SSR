import React, { useState } from "react";
import "./CartItems.css"; // استيراد ملف الأنيميشن

interface Product {
  id: number;
  name: string;
  code: string;
  price: number;
  image: string;
  quantity: number;
  maxQty: number;
}

const CartItems: React.FC = () => {
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

  const incrementQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity < item.maxQty
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id: number) => {
    setDeletingId(id);
    setTimeout(() => {
      setCart((prev) => prev.filter((item) => item.id !== id));
      setDeletingId(null);
    }, 400); // المدة نفس مدة الأنيميشن
  };

  return (
    <div className="d-flex flex-column gap-3">
      {cart.map((item) => (
        <div
          key={item.id}
          className={`d-flex justify-content-between align-items-center py-2 border-bottom ${
            deletingId === item.id ? "fade-out" : ""
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
                className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
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

              {/* Delete Button as Link */}
              <button
                className="btn btn-link p-0 text-danger small"
                onClick={() => deleteItem(item.id)}
                disabled={deletingId === item.id}
              >
                إزالة
              </button>

              {/* Qty Controls */}
              <div
                className="d-flex align-items-center border rounded overflow-hidden mt-1"
                style={{ width: "110px" }}
              >
                <button
                  className="btn btn-sm btn-light flex-fill border-end"
                  onClick={() => decrementQty(item.id)}
                  disabled={item.quantity <= 1 || deletingId === item.id}
                >
                  -
                </button>
                <div className="flex-fill text-center small">{item.quantity}</div>
                <button
                  className="btn btn-sm btn-light flex-fill border-start"
                  onClick={() => incrementQty(item.id)}
                  disabled={item.quantity >= item.maxQty || deletingId === item.id}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Total Price */}
          <div className="text-end">
            <p className="fw-bold text-black mb-0">
              ج.م {(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;