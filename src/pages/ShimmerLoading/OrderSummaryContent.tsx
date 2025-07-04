import React from 'react';
import CouponInput from './CuponState';

const OrderSummary = () => (
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

    {/* Coupon Input */}
    <CouponInput />

    {/* Notes */}
    {[1, 2].map((_, i) => (
      <div key={i} className="border rounded p-3 bg-white">
        <div className="d-flex justify-content-start align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="none" stroke="#606060" strokeWidth="32">
            <circle cx="256" cy="256" r="208" />
            <line x1="256" y1="160" x2="256" y2="280" />
            <circle cx="256" cy="344" r="16" fill="#606060" />
          </svg>
          <p className="small text-muted mb-0">
            ملاحظة: رسوم إضافية 50 جنيه لهذا المنتج
          </p>
        </div>
      </div>
    ))}

    {/* Divider */}
    <hr className="my-2" />

    {/* Totals Section */}
    <div className="d-flex flex-column gap-3" dir="rtl">
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
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSummary;