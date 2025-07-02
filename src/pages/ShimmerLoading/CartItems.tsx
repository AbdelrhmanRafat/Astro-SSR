import React from 'react';
import type { Product } from "../../Models/Products";


const CartItems: React.FC = () => {
    return (
        <>
            {/* Products List */}
            <div className="bg-white rounded shadow-sm p-4">
                <div className="d-flex flex-column gap-3">

                    {/* Dynamic Products */}
                    {/* Static Products */}
                    <div className="d-flex flex-column gap-3">
                        {/* Product 1 */}
                        <div className="d-flex align-items-center gap-3 p-3 border rounded">
                            <div className="position-relative">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg"
                                    alt="Product 1"
                                    className="rounded"
                                    style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg";
                                    }}
                                />
                                <span className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ top: '-8px', right: '-8px', width: '20px', height: '20px', fontSize: '12px' }}>
                                    2
                                </span>
                            </div>
                            <div className="flex-grow-1">
                                <h3 className="fw-medium text-dark mb-1 fs-6 fs-md-5">منتج ثابت 1</h3>
                                <p className="text-muted small mb-0">CODE123</p>
                            </div>
                            <div className="text-end">
                                <p className="fw-bold fs-6 fs-md-5 mb-0">£E 150.00</p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="d-flex align-items-center gap-3 p-3 border rounded">
                            <div className="position-relative">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg"
                                    alt="Product 2"
                                    className="rounded"
                                    style={{ width: '64px', height: '64px', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg";
                                    }}
                                />
                                <span className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ top: '-8px', right: '-8px', width: '20px', height: '20px', fontSize: '12px' }}>
                                    1
                                </span>
                            </div>
                            <div className="flex-grow-1">
                                <h3 className="fw-medium text-dark mb-1 fs-6 fs-md-5">منتج ثابت 2</h3>
                                <p className="text-muted small mb-0">CODE456</p>
                            </div>
                            <div className="text-end">
                                <p className="fw-bold fs-6 fs-md-5 mb-0">£E 200.00</p>
                            </div>
                        </div>
                    </div>


                    {/* Action Buttons */}
                    <div className="d-flex gap-3 mt-4">
                        <button className="flex-fill btn btn-outline-secondary">
                            تطبيق الكود
                        </button>
                        <button className="flex-fill btn btn-link text-primary text-decoration-none">
                            رموز الخصم في نطاق أبجديا
                        </button>
                    </div>

                    {/* Shipping Info */}
                    <div className="bg-light p-3 rounded mt-3">
                        <p className="small text-muted mb-0">
                            ملاحظة المتجر ان يوجد رسوم إضافية 50 جنيه اضافي عند اختيار هذا المنتج
                        </p>
                    </div>

                    {/* Discount Info */}
                    <div className="text-center small text-muted">
                        قم بتوفير 20% تخفيض WEEK اضافي
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItems;