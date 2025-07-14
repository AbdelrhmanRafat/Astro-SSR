import React from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";

const ProductOutOfStoreForm: React.FC = () => {
  const handleCheckoutClick = () => {
    console.log("Navigate to Home Page");
  };

  return (
    <div className="bg-white h-100 d-flex flex-column gap-3 pt-4">
      <div className="container-lg w-100 px-0 px-md-3 mx-0 mx-md-auto row">
        <div
          className="d-flex justify-content-center justify-content-md-end align-items-start p-md-3"
          style={{ height: "80vh" }}
        >
          <div className="d-flex flex-column gap-3 col-lg-9 col-12">
            {/* Message */}
            <div className="d-flex align-items-center gap-3">
              {/* Text */}
              <div>
                <h4 className="fw-bold mb-1">إنتهى من المخزن</h4>
                <p className="text-muted mb-0">بعض العناصر لم تعد متوفّرة.</p>
              </div>

              {/* Icon */}
              <div
                className="border border-2 border-primary rounded-circle d-flex justify-content-center align-items-center"
                style={{ width: "64px", height: "64px" }}
              >
                <span className="text-primary fs-2">!</span>
              </div>
            </div>

            {/* Button */}
            <div className="d-flex justify-content-end">
              <CheckoutButton
                title="العودة إلى المتجر"
                onClick={handleCheckoutClick}
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOutOfStoreForm;