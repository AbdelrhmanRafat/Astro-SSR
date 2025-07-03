import React from 'react';
import type { Product } from "../../Models/Products";
import CouponInput from './CuponState';




const CartItems: React.FC = () => {
    return (
        <>
<div className="container-fluid bg-secondary-subtle min-vh-md-100">
      <div className="row">
        <div className="col-12 col-md-8 d-flex flex-column justify-content-start align-items-start gap-3 p-4 py-5">

                    {/* Static Products */}
                    <div className="d-flex flex-column gap-3 w-100">
                        <div className="d-flex justify-content-between align-items-center gap-3">

                            {/* Left Side: Product Image + Info */}
                            <div className="d-flex align-items-center gap-3">
                                <div className="position-relative">
                                    <img
                                        src="https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg"
                                        alt="Product 1"
                                        className="rounded"
                                        style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                "https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg";
                                        }}
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

                                {/* Product Name & Code */}
                                <div>
                                    <h3 className="fw-medium text-dark mb-1 fs-6">كوفي كورنر 40×120سم- LOG674</h3>
                                    <p className="text-muted small mb-0">CODE123</p>
                                </div>
                            </div>

                            {/* Right Side: Price */}
                            <div className="text-end">
                                <p className="fw-bold fs-6 mb-0">ج.م 150.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <CouponInput />

                    {/* Shipping Info Notes */}
                    {[1, 2].map((_, i) => (
                        <div key={i} className="border rounded p-3 w-100 bg-white">
                            <div className="d-flex justify-content-start align-items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512" fill="none" stroke="#606060" strokeWidth="32">
                                    <circle cx="256" cy="256" r="208" />
                                    <line x1="256" y1="160" x2="256" y2="280" />
                                    <circle cx="256" cy="344" r="16" fill="#606060" />
                                </svg>
                                <p className="small text-muted mb-0">
                                    ملاحظة المتجر ان يوجد رسوم إضافية 50 جنيه اضافي عند اختيار هذا المنتج
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Totals */}
                    <div className="w-100 d-flex flex-column text-black gap-2" dir="rtl">
                        <div className="d-flex justify-content-between">
                            <span className="fw-normal fs-6">المجموع الفرعي</span>
                            <span className="fw-normal fs-6">£E ٩٦٢١٠٠٫٠٠</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="fw-normal fs-6">شحن</span>
                            <span className="fw-normal fs-6">£E ٣٧٠٠٫٠٠</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <span className="fw-normal fs-6">المجموع</span>
                            <div className="d-flex align-items-center gap-2">
                                <span className="fw-normal fs-6">£E ٩٦٥٨١٠٫٠٠</span>
                                <span className="text-muted small">EGP</span>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </>
    );
};

export default CartItems;