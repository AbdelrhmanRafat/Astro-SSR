import React from 'react';

const ShippingForm: React.FC = () => {
  return (
    <form className="w-100 d-flex flex-column justify-content-start align-items-center gap-3">

      {/* Note Box */}
      <div className="w-100 border border-black border-1 rounded p-3 d-flex justify-content-start align-items-center gap-2 bg-secondary-subtle">
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
        <p className="small text-muted mb-0">
          ملاحظة المتجر ان يوجد رسوم إضافية 50 جنيه اضافي عند اختيار هذا المنتج
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="w-100 d-flex flex-column align-items-start gap-2">
        <h5 className="fw-bold mb-0">معلومات التواصل</h5>

        <div className="w-100">
          <label htmlFor="phoneOrEmail" className="form-label small text-muted mb-1">
            الايميل أو رقم التليفون
          </label>
          <input type="text" id="phoneOrEmail" className="form-control" />
        </div>

        <div className="form-check small text-muted">
          <input className="form-check-input" type="checkbox" id="newsletter" />
          <label className="form-check-label" htmlFor="newsletter">
            أرسل لي الأخبار والعروض
          </label>
        </div>
      </div>

      {/* Shipping Address Section */}
      <div className="w-100 d-flex flex-column align-items-start gap-2">
        <h5 className="fw-bold mb-0">عنوان الشحن</h5>

        <div className="w-100">
          <label className="form-label small text-muted mb-1">بلد</label>
          <select className="form-select">
            <option>مصر</option>
          </select>
        </div>

        <div className="row w-100 g-3">
          <div className="col-12 col-md-6">
            <label className="form-label small text-muted mb-1">الاسم الأول</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label small text-muted mb-1">الاسم الثاني</label>
            <input type="text" className="form-control" />
          </div>
        </div>

        <div className="w-100">
          <label className="form-label small text-muted mb-1">العنوان</label>
          <input type="text" className="form-control" />
        </div>

        <div className="row w-100 g-3">
          <div className="col-12 col-md-6">
            <label className="form-label small text-muted mb-1">مدينة</label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-md-6">
            <label className="form-label small text-muted mb-1">محافظة</label>
            <select className="form-select">
              <option>محافظة القاهرة</option>
              <option>محافظة الجيزة</option>
              <option>محافظة الإسكندرية</option>
            </select>
          </div>
        </div>

        <div className="w-100">
          <label className="form-label small text-muted mb-1">الرمز البريدي (اختياري)</label>
          <input type="text" className="form-control" />
        </div>

        <div className="w-100 position-relative">
          <label className="form-label small text-muted mb-1">رقم الموبايل للتواصل بخصوص الطلب</label>
          <input type="text" className="form-control ps-5" />
          <div className="position-absolute start-0 top-50 translate-middle-y ps-3">
            <svg
              className="text-muted"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="form-check small">
          <input className="form-check-input" type="checkbox" id="saveInfo" />
          <label className="form-check-label" htmlFor="saveInfo">
            احفظ هذه المعلومات للمرة القادمة
          </label>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center w-100 gap-3 pt-2">
          <a href="#" className="text-primary text-decoration-none">
            العودة لعربة التسوق
          </a>
          <button type="submit" className="btn btn-primary px-4 py-2">
            المتابعة لطريقة الشحن
          </button>
        </div>
      </div>
    </form>
  );
};

export default ShippingForm;