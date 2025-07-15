/**
 * @file DeliveryOptions.tsx
 * @description A component that allows users to choose between home delivery and in-store pickup.
 * If in-store pickup is selected, a dropdown of available stores is displayed.
 *
 * @component
 * @returns {JSX.Element} The rendered delivery options component.
 *
 * @logic
 * - The component uses `useState` to manage the selected delivery method (`selectedDelivery`) and the selected store (`selectedStore`).
 * - A mock array `mockStores` provides a list of store locations.
 * - `handleDeliveryChange`: A function that updates the selected delivery method. It also resets the selected store if the user switches away from in-store pickup.
 * - `handleStoreChange`: A function that updates the selected store from the dropdown.
 * - The component renders two radio buttons for "Home Delivery" and "In-store Pickup".
 * - A dropdown to select a store is conditionally rendered only when "In-store Pickup" is the selected delivery method.
 *
 * @integration
 * - This component is designed to be part of the `CheckoutForm`.
 * - The state of the selected delivery option and store would typically be lifted up to the parent `CheckoutForm` to be included in the final order details.
 */
import React, { useState } from 'react';

// Mock array of store names
const mockStores = [
  "فرع النزهة الجديدة",
  "فرع مدينة نصر", 
  "فرع الزمالك",
  "فرع المعادي",
  "فرع الجيزة",
  "فرع الإسكندرية"
];

const DeliveryOptions: React.FC = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("home");
  const [selectedStore, setSelectedStore] = useState("");

  const handleDeliveryChange = (value: string) => {
    setSelectedDelivery(value);
    // Reset store selection when changing delivery method
    if (value !== "store") {
      setSelectedStore("");
    }
  };

  const handleStoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStore(e.target.value);
  };
  return (
    <div className="d-flex flex-column gap-2">
      <h5 className="fw-bold text-dark">طريقة التوصيل</h5>
      <div className="d-flex flex-column gap-3">
        
        {/* توصيل إلى المنزل */}
        <label className="border rounded p-3 d-flex gap-3 align-items-start">
          <input
            type="radio"
            name="delivery"
            value="home"
            className="form-check-input mt-1"
            checked={selectedDelivery === "home"}
            onChange={(e) => handleDeliveryChange(e.target.value)}
          />
          <div className="flex-grow-1 ms-2">
            <div className="fw-semibold">توصيل إلى المنزل</div>
            <div className="text-muted small">
              سيتم توصيل طلبك إلى باب منزلك.
            </div>
          </div>
        </label>

        {/* الاستلام من المتجر */}
        <label className="border rounded p-3 d-flex gap-3 align-items-start">
          <input
            type="radio"
            name="delivery"
            value="store"
            className="form-check-input mt-1"
            checked={selectedDelivery === "store"}
            onChange={(e) => handleDeliveryChange(e.target.value)}
          />
          <div className="flex-grow-1 ms-2">
            <div className="fw-semibold">الاستلام من المتجر</div>
            <div className="text-muted small">
              استلم طلبك مباشرة من المتجر.
            </div>
            
            {/* Store selection dropdown - only show if store delivery is selected and stores exist */}
            {selectedDelivery === "store" && mockStores && mockStores.length > 0 && (
              <div className="mt-3">
                <div className="form-floating">
                  <select
                    id="storeSelect"
                    value={selectedStore}
                    onChange={handleStoreChange}
                    className="form-select fs-6"
                  >
                    <option value="">اختر الفرع</option>
                    {mockStores.map((store, index) => (
                      <option key={index} value={store}>
                        {store}
                      </option>
                    ))}
                  </select>
                  <label htmlFor="storeSelect" className="text-muted fs-7">اختر الفرع</label>
                </div>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default DeliveryOptions;