
import React from 'react';

const ShippingForm: React.FC = () => {
  return (
    <div className="bg-white min-vh-100">
      <div className="container-fluid">
        <div className="row">
          {/* Main Form Content */}
          <div className="col-12 col-xl-10 offset-xl-1">
            <div className="py-4 py-md-5 px-3 px-md-4">
              <form>
                {/* Contact Info Section */}
                <div className="mb-5">
                  <h5 className="fw-bold mb-3 text-dark border-bottom pb-2">معلومات التواصل</h5>
                  <div className="form-floating">
                    <input 
                      type="text" 
                      id="phoneOrEmail" 
                      className="form-control form-control-lg text-end shadow-sm border-2" 
                      placeholder="الايميل أو رقم التليفون" 
                    />
                    <label htmlFor="phoneOrEmail" className="text-muted">الايميل أو رقم التليفون</label>
                  </div>
                </div>

                {/* Shipping Address Section */}
                <div className="mb-5">
                  <h5 className="fw-bold mb-3 text-dark border-bottom pb-2">عنوان الشحن</h5>
                  
                  {/* Country Select */}
                  <div className="mb-3">
                    <div className="form-floating">
                      <select
                        id="country"
                        className="form-select form-select-lg text-end shadow-sm border-2"
                        style={{
                          appearance: "none",
                          backgroundImage:
                            "url(\"data:image/svg+xml;utf8,<svg fill='%23606060' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M1.5 5.5l6 6 6-6'/></svg>\")",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "left 1rem center",
                          backgroundSize: "1rem",
                        }}
                      >
                        <option value="">اختر البلد</option>
                        <option>مصر</option>
                        <option>السعودية</option>
                        <option>الإمارات</option>
                      </select>
                      <label htmlFor="country" className="text-muted">بلد</label>
                    </div>
                  </div>

                  {/* First/Last Name */}
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control form-control-lg text-end shadow-sm border-2"
                          id="firstName"
                          placeholder="الاسم الأول"
                        />
                        <label htmlFor="firstName" className="text-muted">الاسم الأول</label>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control form-control-lg text-end shadow-sm border-2"
                          id="lastName"
                          placeholder="الاسم الثاني"
                        />
                        <label htmlFor="lastName" className="text-muted">الاسم الثاني</label>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-3">
                    <div className="form-floating">
                      <input 
                        type="text" 
                        className="form-control form-control-lg text-end shadow-sm border-2" 
                        id="address" 
                        placeholder="العنوان" 
                      />
                      <label htmlFor="address" className="text-muted">العنوان</label>
                    </div>
                  </div>

                  {/* City/Governorate */}
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control form-control-lg text-end shadow-sm border-2"
                          id="city"
                          placeholder="مدينة"
                        />
                        <label htmlFor="city" className="text-muted">مدينة</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <select
                          id="governorate"
                          className="form-select form-select-lg text-end shadow-sm border-2"
                          style={{
                            appearance: "none",
                            backgroundImage:
                              "url(\"data:image/svg+xml;utf8,<svg fill='%23606060' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='M1.5 5.5l6 6 6-6'/></svg>\")",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left 1rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="">اختر المحافظة</option>
                          <option>القاهرة</option>
                          <option>الجيزة</option>
                          <option>الإسكندرية</option>
                        </select>
                        <label htmlFor="governorate" className="text-muted">محافظة</label>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="mb-4">
                    <div className="card border-2 shadow-sm">
                      <div className="card-body">
                        <div className="d-flex align-items-center">
                          <div className="form-floating flex-grow-1">
                            <input
                              type="text"
                              id="mobile"
                              className="form-control border-0 shadow-none bg-transparent text-end"
                              placeholder="رقم الموبايل"
                            />
                            <label htmlFor="mobile" className="text-muted">رقم الموبايل للتواصل بخصوص الطلب</label>
                          </div>
                          <div className="ms-3">
                            <i className="bi bi-info-circle text-primary" style={{ fontSize: '1.25rem' }}></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pt-4 border-top">
                    <a href="#" className="btn btn-outline-primary text-decoration-none">
                      العودة لعربة التسوق
                    </a>
                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3">
                      المتابعة لطريقة الشحن
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;