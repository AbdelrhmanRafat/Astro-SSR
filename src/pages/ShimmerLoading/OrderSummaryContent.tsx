import React, { useState, useRef, useEffect } from 'react';
import CouponInput from './CuponState';

const OrderSummaryContent = () => (
  <div className="d-flex flex-column w-100 gap-3 mt-3">
    {/* المنتجات */}
    <div className="d-flex justify-content-between align-items-center">
      {/* صورة المنتج */}
      <div className="d-flex align-items-center gap-3">
        <div className="position-relative">
          <img
            src="https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg"
            alt="Product"
            className="rounded"
            style={{ width: '64px', height: '64px', objectFit: 'cover' }}
          />
          <span
            className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
            style={{
              top: '-8px',
              left: '-8px',
              width: '20px',
              height: '20px',
              fontSize: '12px',
            }}
          >
            2
          </span>
        </div>
        <div>
          <h3 className="fw-medium text-dark mb-1 fs-6">كوفي كورنر 40×120سم- LOG674</h3>
          <p className="text-muted small mb-0">CODE123</p>
        </div>
      </div>

      {/* السعر */}
      <div className="text-end">
        <p className="fw-bold fs-6 mb-0">ج.م 150.00</p>
      </div>
    </div>

    {/* إدخال كوبون */}
    <CouponInput />

    {/* ملاحظات */}
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

    {/* الإجماليات */}
    <div className="d-flex flex-column text-black gap-2" dir="rtl">
      <div className="d-flex justify-content-between">
        <span className="fw-normal fs-6">المجموع الفرعي</span>
        <span className="fw-normal fs-6">£E ٩٦٢١٠٠٫٠٠</span>
      </div>
      <div className="d-flex justify-content-between">
        <span className="fw-normal fs-6">الشحن</span>
        <span className="fw-normal fs-6">£E ٣٧٠٠٫٠٠</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="fw-normal fs-6">الإجمالي</span>
        <div className="d-flex align-items-center gap-2">
          <span className="fw-normal fs-6">£E ٩٦٥٨١٠٫٠٠</span>
          <span className="text-muted small">EGP</span>
        </div>
      </div>
    </div>
  </div>
);

export default OrderSummaryContent;