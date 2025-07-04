
import React from 'react';

const OrderSummaryContent = () => (
  <div className="d-flex flex-column gap-4">
    {/* Product Items */}
    <div className="d-flex flex-column gap-3">
      <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-3">
        {/* Product Image & Info */}
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative">
            <img
              src="https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg"
              alt="Product"
              className="rounded-3 shadow-sm"
              style={{ width: '64px', height: '64px', objectFit: 'cover' }}
            />
            <span
              className="position-absolute bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
              style={{
                top: '-8px',
                left: '-8px',
                width: '24px',
                height: '24px',
                fontSize: '11px',
                fontWeight: 'bold'
              }}
            >
              2
            </span>
          </div>
          <div>
            <h6 className="fw-semibold text-dark mb-1">كوفي كورنر 40×120سم- LOG674</h6>
            <p className="text-muted small mb-0">
              <i className="bi bi-tag me-1"></i>CODE123
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="text-end">
          <p className="fw-bold text-primary mb-0">ج.م 150.00</p>
        </div>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-2" />

    {/* Totals Section */}
    <div className="d-flex flex-column gap-3">
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted">المجموع الفرعي:</span>
        <span className="fw-semibold">ج.م 300.00</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted">الشحن:</span>
        <span className="fw-semibold">ج.م 50.00</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="text-muted">الضرائب:</span>
        <span className="fw-semibold">ج.م 25.00</span>
      </div>
      
      {/* Final Total */}
      <div className="border-top pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="h6 fw-bold text-dark">المجموع الكلي:</span>
          <div className="d-flex align-items-center gap-2">
            <span className="h5 fw-bold text-primary mb-0">ج.م ٩٦٥٨١٠٫٠٠</span>
            <small className="text-muted">شامل الضرائب</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSummaryContent;