import React from 'react';
import type { Product } from "../../Models/Products";


const CartItems: React.FC = () => {
    return (
        <>
            {/* Products List */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="space-y-4">

                    {/* Dynamic Products */}
                    {/* Static Products */}
                    <div className="flex flex-col gap-4">
                        {/* Product 1 */}
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="relative">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg"
                                    alt="Product 1"
                                    className="w-16 h-16 object-cover rounded"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg";
                                    }}
                                />
                                <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    2
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-800">منتج ثابت 1</h3>
                                <p className="text-sm text-gray-500">CODE123</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg">£E 150.00</p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="relative">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg"
                                    alt="Product 2"
                                    className="w-16 h-16 object-cover rounded"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg";
                                    }}
                                />
                                <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    1
                                </span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-800">منتج ثابت 2</h3>
                                <p className="text-sm text-gray-500">CODE456</p>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-lg">£E 200.00</p>
                            </div>
                        </div>
                    </div>


                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors">
                            تطبيق الكود
                        </button>
                        <button className="flex-1 text-blue-600 py-2 px-4 hover:underline">
                            رموز الخصم في نطاق أبجديا
                        </button>
                    </div>

                    {/* Shipping Info */}
                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                        <p className="text-sm text-gray-600">
                            ملاحظة المتجر ان يوجد رسوم إضافية 50 جنيه اضافي عند اختيار هذا المنتج
                        </p>
                    </div>

                    {/* Discount Info */}
                    <div className="text-center text-sm text-gray-600">
                        قم بتوفير 20% تخفيض WEEK اضافي
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItems;