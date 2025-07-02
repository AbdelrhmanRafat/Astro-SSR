import React from 'react';

const ShippingForm: React.FC = () => {
  return (
    <>
      {/* Contact Info Card */}
      <section id="Personal-info-Form" className="p-4 mb-4 d-flex flex-column justify-content-start align-items-start gap-3">
        <h3 className="fw-bold fs-5">معلومات التواصل</h3>
        <div className="d-flex flex-column gap-3 w-100">
          <div>
            <input 
              type="text" 
              placeholder="الايميل او رقم التليفون"
              className="form-control"
            />
          </div>
          <div className="d-flex align-items-center gap-2">
            <input type="checkbox" id="newsletter" className="form-check-input" />
            <label htmlFor="newsletter" className="form-check-label small text-muted">
              أرسل لي الأخبار والعروض
            </label>
          </div>
        </div>
        <h3 className="fw-bold fs-5">عنوان الشحن</h3>
        <div className="d-flex flex-column gap-3 w-100">
          <div>
            <label className="form-label small fw-medium text-dark mb-2">
              بلد
            </label>
            <select className="form-select">
              <option>مصر</option>
            </select>
          </div>

          <div className="row g-3">
            <div className="col-6">
              <label className="form-label small fw-medium text-dark mb-2">
                الاسم الأول
              </label>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>
            <div className="col-6">
              <label className="form-label small fw-medium text-dark mb-2">
                الاسم الثاني
              </label>
              <input 
                type="text" 
                className="form-control" 
              />
            </div>
          </div>

          <div>
            <label className="form-label small fw-medium text-dark mb-2">
              العنوان
            </label>
            <input 
              type="text" 
              className="form-control" 
            />
          </div>

          <div className="d-flex flex-md-row flex-column justify-content-center w-full items-center gap-3">
            <div className="w-100 md:w-50">
              <label className="form-label small fw-medium text-dark mb-2">
                مدينة
              </label>
              <input
                type="text"
                className="form-control"
              />
            </div>
            <div className="w-100 md:w-50">
              <label className="form-label small fw-medium text-dark mb-2">
                محافظة
              </label>
              <select className="form-select">
                <option>محافظة الجيزة</option>
              </select>
            </div>
          </div>

          <div className="position-relative">
            <input 
              type="text" 
              placeholder="رقم الموبايل للتواصل بخصوص الطلب"
              className="form-control"
              style={{paddingLeft: '2.5rem'}}
            />
            <div className="position-absolute start-0 top-50 translate-middle-y ms-3">
              <svg className="text-muted" width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Links */}
      <div className="text-center d-flex flex-column gap-2 small text-muted">
        <div className="d-flex justify-content-center gap-3">
          <a href="#" className="text-decoration-none text-muted">شروط الخدمة</a>
          <a href="#" className="text-decoration-none text-muted">سياسة الخصوصية</a>
          <a href="#" className="text-decoration-none text-muted">سياسة الاسترداد</a>
        </div>
      </div>
    </>
  );
};

export default ShippingForm;