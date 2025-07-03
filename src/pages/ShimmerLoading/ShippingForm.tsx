import React from 'react';

const ShippingForm: React.FC = () => {
  return (
    <form className="container-fluid min-vh-md-100" dir="rtl">
      <div className="row">
        {/* Sidebar - hidden on small screens */}
        <div className="d-none d-md-flex col-md-2 flex-column justify-content-center align-items-center p-3 p-md-5" />

        {/* Main Form Content */}
        <div className="col-12 col-md-10 d-flex flex-column justify-content-start align-items-start gap-2 gap-md-3 p-3 p-md-5">

          {/* Contact Info */}
          <div className="w-100 d-flex flex-column align-items-start gap-2">
            <h5 className="fw-bold mb-0">معلومات التواصل</h5>
            <div className="form-floating w-100">
              <input type="text" id="phoneOrEmail" className="form-control text-end" placeholder="الايميل أو رقم التليفون" />
              <label htmlFor="phoneOrEmail">الايميل أو رقم التليفون</label>
            </div>
            <div className="form-check small text-muted">
              <input className="form-check-input" type="checkbox" id="newsletter" />
              <label className="form-check-label" htmlFor="newsletter">أرسل لي الأخبار والعروض</label>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="w-100 d-flex flex-column align-items-start gap-2">
            <h5 className="fw-bold mb-0">عنوان الشحن</h5>

            {/* Country Select */}
            <div className="form-floating w-100">
              <select className="form-select text-end" id="country" aria-label="اختر البلد">
                <option>مصر</option>
              </select>
              <label htmlFor="country">بلد</label>
            </div>

            {/* First/Last Name */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch gap-2 w-100">
              <div className="form-floating w-100 w-md-50">
                <input
                  type="text"
                  className="form-control text-end"
                  id="firstName"
                  placeholder="الاسم الأول"
                />
                <label htmlFor="firstName">الاسم الأول</label>
              </div>

              <div className="form-floating w-100 w-md-50">
                <input
                  type="text"
                  className="form-control text-end"
                  id="lastName"
                  placeholder="الاسم الثاني"
                />
                <label htmlFor="lastName">الاسم الثاني</label>
              </div>
            </div>


            {/* Address */}
            <div className="form-floating w-100">
              <input type="text" className="form-control text-end" id="address" placeholder="العنوان" />
              <label htmlFor="address">العنوان</label>
            </div>

            {/* City/Governorate */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch gap-2 w-100">
              <div className="form-floating w-100 w-md-50">
                <input
                  type="text"
                  className="form-control text-end"
                  id="city"
                  placeholder="مدينة"
                />
                <label htmlFor="city">مدينة</label>
              </div>

              <div className="form-floating w-100 w-md-50">
                <select className="form-select text-end" id="governorate">
                  <option>محافظة القاهرة</option>
                  <option>محافظة الجيزة</option>
                  <option>محافظة الإسكندرية</option>
                </select>
                <label htmlFor="governorate">محافظة</label>
              </div>
            </div>


            {/* Zip */}
            <div className="form-floating w-100">
              <input type="text" className="form-control text-end" id="zip" placeholder="الرمز البريدي" />
              <label htmlFor="zip">الرمز البريدي (اختياري)</label>
            </div>

            {/* Mobile Number */}
            <div className="w-100 position-relative">
              <div className="form-floating w-100">
                <input type="text" className="form-control ps-5 text-end" id="mobile" placeholder="رقم الموبايل" />
                <label htmlFor="mobile">رقم الموبايل للتواصل بخصوص الطلب</label>
              </div>
              <div className="position-absolute start-0 top-50 translate-middle-y ps-3">
                <svg className="text-muted" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Save Info */}
            <div className="form-check small">
              <input className="form-check-input" type="checkbox" id="saveInfo" />
              <label className="form-check-label" htmlFor="saveInfo">احفظ هذه المعلومات للمرة القادمة</label>
            </div>

            {/* Actions */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 gap-2 pt-3">
              <a href="#" className="text-primary text-decoration-none w-100 w-md-auto text-center">العودة لعربة التسوق</a>
              <button type="submit" className="btn btn-primary px-4 py-2 w-100 w-md-auto">المتابعة لطريقة الشحن</button>
            </div>

          </div>
        </div>
      </div>
    </form>
  );
};

export default ShippingForm;