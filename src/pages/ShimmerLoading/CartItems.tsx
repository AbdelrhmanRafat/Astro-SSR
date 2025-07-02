import React from 'react';
import type { Product } from "../../Models/Products";
import CouponInput from './CuponState';


const CartItems: React.FC = () => {
    return (
        <>
            {/* Products List */}
            <div className="md:p-4 md:w-75">
                <div className="d-flex flex-column gap-3">

                    {/* Static Products */}
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex justify-content-between align-items-center gap-3">
                            {/* Left Side: Product Image + Info */}
                            <div className="d-flex align-items-center gap-3">
                                {/* Image + Quantity Badge */}
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
                                    <h3 className="fw-medium text-dark mb-1 fs-6 fs-md-5">كوفي كورنر 40×120سم- LOG674</h3>
                                    <p className="text-muted small mb-0">CODE123</p>
                                </div>
                            </div>

                            {/* Right Side: Price */}
                            <div className="text-end">
                                <p className="fw-bold fs-6 fs-md-5 mb-0">ج.م 150.00</p>
                            </div>
                        </div>

                    </div>


                    {/* Action Buttons */}
                    <CouponInput />
                    {/* Shipping Info */}
                    <div className="border border-white border-1 rounded p-3">
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            {/* Colored Outline SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512"
                                fill="none"
                                stroke="#606060"
                                strokeWidth="32"
                            >
                                <circle cx="256" cy="256" r="208" stroke="#606060" strokeWidth="32" fill="none" />
                                <line x1="256" y1="160" x2="256" y2="280" stroke="#606060" strokeWidth="32" />
                                <circle cx="256" cy="344" r="16" fill="#606060" />
                            </svg>

                            {/* Message */}
                            <p className="small text-muted mb-0">
                                ملاحظة المتجر ان يوجد رسوم إضافية 50 جنيه اضافي عند اختيار هذا المنتج
                            </p>
                        </div>
                    </div>
                    {/* Shipping Info */}
                    <div className="border border-white border-1 rounded p-3">
                        <div className="d-flex justify-content-start align-items-center gap-2">
                            {/* Colored Outline SVG Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512"
                                fill="none"
                                stroke="#606060"
                                strokeWidth="32"
                            >
                                <circle cx="256" cy="256" r="208" stroke="#606060" strokeWidth="32" fill="none" />
                                <line x1="256" y1="160" x2="256" y2="280" stroke="#606060" strokeWidth="32" />
                                <circle cx="256" cy="344" r="16" fill="#606060" />
                            </svg>

                            {/* Message */}
                            <p className="small text-muted mb-0">
                                ملاحظة المتجر ان يوجد رسوم إضافية 50 جنيه اضافي عند اختيار هذا المنتج
                            </p>
                        </div>
                    </div>

                    <div className="w-100 d-flex flex-column text-black gap-2" dir="rtl">
                        {/* Subtotal */}
                        <div className="d-flex justify-content-between">
                            <span className="fw-normal fs-6">المجموع الفرعي</span>
                            <span className="fw-normal fs-6">£E ٩٦٢١٠٠٫٠٠</span>
                        </div>

                        {/* Shipping */}
                        <div className="d-flex justify-content-between">
                            <span className="fw-normal fs-6">شحن</span>
                            <span className="fw-normal fs-6">£E ٣٧٠٠٫٠٠</span>
                        </div>

                        {/* Total */}
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
        </>
    );
};

export default CartItems;