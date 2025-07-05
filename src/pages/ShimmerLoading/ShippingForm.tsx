const ShippingForm: React.FC = () => {
  return (
    <div className="bg-white h-100 d-flex flex-column gap-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-end align-items-center p-3">
              <form className="d-flex flex-column gap-4 ">
                {/* معلومات التواصل */}
                <div className="d-flex flex-column gap-3">
                  <h5 className="fw-bold text-dark border-bottom pb-2">معلومات التواصل</h5>
                  <div className="form-floating">
                    <input
                      type="text"
                      id="phoneOrEmail"
                      className="form-control form-control-lg  shadow-sm border-2"
                      placeholder="الايميل أو رقم التليفون"
                    />
                    <label htmlFor="phoneOrEmail" className="text-muted">الايميل أو رقم التليفون</label>
                  </div>
                </div>

                {/* عنوان الشحن */}
                <div className="d-flex flex-column gap-3">
                  <h5 className="fw-bold text-dark border-bottom pb-2">عنوان الشحن</h5>

                  {/* البلد */}
                  <div className="form-floating w-100 w-md-50 position-relative">
                    <select
                      id="country"
                      className="form-select border rounded-3 shadow-sm pe-5 pt-4"
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
                    <label htmlFor="country">بلد</label>
                  </div>

                  {/* الاسم الأول والاسم الثاني */}
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control form-control-lg shadow-sm border-2"
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
                          className="form-control form-control-lg shadow-sm border-2"
                          id="lastName"
                          placeholder="الاسم الثاني"
                        />
                        <label htmlFor="lastName" className="text-muted">الاسم الثاني</label>
                      </div>
                    </div>
                  </div>

                  {/* العنوان */}
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg shadow-sm border-2"
                      id="address"
                      placeholder="العنوان"
                    />
                    <label htmlFor="address" className="text-muted">العنوان</label>
                  </div>

                  {/* المدينة والمحافظة */}
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control form-control-lg shadow-sm border-2"
                          id="city"
                          placeholder="مدينة"
                        />
                        <label htmlFor="city" className="text-muted">مدينة</label>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 position-relative">
                      <div className="form-floating">
                        <select
                          id="governorate"
                          className="form-select border rounded-3 shadow-sm pe-5 pt-4"
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
                        <label htmlFor="governorate">محافظة</label>
                      </div>
                    </div>
                  </div>

                  {/* رقم الموبايل */}
                  {/* Mobile Number */}
                  <div className="w-100">
                    <div
                      className="d-flex align-items-center justify-content-between border rounded-3 shadow-sm px-3 py-2 bg-white"
                    >
                      {/* Floating Label Input */}
                      <div className="form-floating flex-grow-1">
                        <input
                          type="text"
                          id="mobile"
                          className="form-control border-0 shadow-none bg-transparent"
                          placeholder="رقم الموبايل"
                          style={{ paddingRight: '0.75rem' }}
                        />
                        <label htmlFor="mobile">رقم الموبايل للتواصل بخصوص الطلب</label>
                      </div>

                      {/* Static Icon */}
                      <div className="ms-3 flex-shrink-0">
                        <svg className="text-muted" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>


                  {/* الأزرار */}
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 pt-4 border-top">
                    <a href="#" className="btn btn-outline-primary w-100 w-md-auto">
                      العودة لعربة التسوق
                    </a>
                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3 w-100 w-md-auto">
                      المتابعة لطريقة الشحن
                    </button>
                  </div>
                </div>
              </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;