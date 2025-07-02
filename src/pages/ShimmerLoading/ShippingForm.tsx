import React from 'react';

const ShippingForm: React.FC = () => {
  return (
    <>
      {/* Contact Info Card */}
      <section id="Personal-info-Form" className="bg-white rounded-lg shadow-sm p-6 mb-6 flex flex-col justify-start items-start gap-3">
        <h3 className="font-bold text-lg">معلومات التواصل</h3>
        <div className="space-y-4 w-full">
          <div>
            <input 
              type="text" 
              placeholder="الايميل او رقم التليفون"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="newsletter" className="rounded" />
            <label htmlFor="newsletter" className="text-sm text-gray-600">
              أرسل لي الأخبار والعروض
            </label>
          </div>
        </div>
        <h3 className="font-bold text-lg">عنوان الشحن</h3>
        <div className="space-y-4 w-full">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              بلد
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white">
              <option>مصر</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الأول
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                الاسم الثاني
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-lg px-3 py-2" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              العنوان
            </label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2" 
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                مدينة
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <option>الرمز البريدي (اختياري)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                محافظة
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white">
                <option>محافظة الجيزة</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <input 
              type="text" 
              placeholder="رقم الموبايل للتواصل بخصوص الطلب"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 pl-10"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="save-info" className="rounded" />
            <label htmlFor="save-info" className="text-xs text-gray-500">
              احفظ هذه المعلومات للمرة القادمة
            </label>
          </div>
        </div>
      </section>
      {/* Footer Links */}
      <div className="text-center space-y-2 text-sm text-gray-500">
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-gray-700">شروط الخدمة</a>
          <a href="#" className="hover:text-gray-700">سياسة الخصوصية</a>
          <a href="#" className="hover:text-gray-700">سياسة الاسترداد</a>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;