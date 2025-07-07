import { useState } from "react";
import './ShippingForm.css';

const ShippingForm: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [deliveryMethod, setDeliveryMethod] = useState("home");

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setMobile(value);
    }
  };

  return (
    <div className="bg-white h-100 d-flex flex-column gap-3 pt-2 pt-md-0">
      <div className="container-lg w-100 px-0 px-md-3 mx-0 mx-md-auto row">
        <div className="d-flex justify-content-center justify-content-md-end align-items-center p-md-3">
          <form className="d-flex flex-column gap-4 col-lg-9 col-12">
            {/* معلومات التواصل */}
            <div className="d-flex flex-column gap-2">
              <h5 className="fw-bold text-dark">معلومات التواصل</h5>
              <div className="form-floating">
                <input
                  type="text"
                  id="phoneOrEmail"
                  className="form-control form-control-lg border fs-6"
                  placeholder="الايميل أو رقم التليفون"
                />
                <label htmlFor="phoneOrEmail" className="text-muted fs-7">
                  الايميل أو رقم التليفون
                </label>
              </div>
            </div>

            {/* عنوان الشحن */}
            <div className="d-flex flex-column gap-2">
              <h5 className="fw-bold text-dark">عنوان الشحن</h5>

              {/* البلد */}
              <div className="form-floating">
                <select
                  id="country"
                  className="form-select fs-6 shippingform-select-custom shippingform-select-country"
                >
                  <option value="">اختر البلد</option>
                  <option>مصر</option>
                  <option>السعودية</option>
                  <option>الإمارات</option>
                </select>
                <label htmlFor="country" className="text-muted fs-7">بلد</label>
              </div>

              {/* الاسم الأول والاسم الثاني */}
              <div className="row g-2 g-md-3">
                <div className="col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg border fs-6"
                      id="firstName"
                      placeholder="الاسم الأول"
                    />
                    <label htmlFor="firstName" className="text-muted fs-7">الاسم الأول</label>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg border fs-6"
                      id="lastName"
                      placeholder="الاسم الثاني"
                    />
                    <label htmlFor="lastName" className="text-muted fs-7">الاسم الثاني</label>
                  </div>
                </div>
              </div>

              {/* العنوان */}
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control form-control-lg border fs-6"
                  id="address"
                  placeholder="العنوان"
                />
                <label htmlFor="address" className="text-muted fs-7">العنوان</label>
              </div>

              {/* المدينة والمحافظة */}
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control form-control-lg border fs-6"
                      id="city"
                      placeholder="مدينة"
                    />
                    <label htmlFor="city" className="text-muted fs-7">مدينة</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      id="governorate"
                      className="form-select fs-6 shippingform-select-custom shippingform-select-governorate"
                    >
                      <option value="">اختر المحافظة</option>
                      <option>القاهرة</option>
                      <option>الجيزة</option>
                      <option>الإسكندرية</option>
                    </select>
                    <label htmlFor="governorate" className="text-muted fs-7">محافظة</label>
                  </div>
                </div>
              </div>

              {/* رقم الموبايل */}
              <div className="w-100">
                <div className="d-flex align-items-center justify-content-between border bg-white rounded-3 px-2">
                  <div className="form-floating flex-grow-1">
                    <input
                      type="text"
                      id="mobile"
                      value={mobile}
                      onChange={handleMobileChange}
                      className="form-control border-0 shadow-none bg-transparent fs-6 shippingform-input-mobile"
                      placeholder="رقم الموبايل"
                    />
                    <label htmlFor="mobile" className="text-muted fs-7">رقم الموبايل للتواصل بخصوص الطلب</label>
                  </div>
                  <div className="flex-shrink-0">
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
            </div>

            {/* خيارات الدفع */}
            <div className="d-flex flex-column gap-2">
              <h5 className="fw-bold text-dark">طريقة الدفع</h5>
              <div className="d-flex flex-column gap-3">

                {/* بطاقة ائتمان */}
                <label className="border rounded p-3 d-flex gap-3 align-items-start">
                  <input
                    type="radio"
                    name="payment"
                    className="form-check-input mt-1"
                    defaultChecked
                  />
                  <div className="flex-grow-1 ms-2">
                    <div className="fw-semibold">بطاقة ائتمان</div>
                    <div className="text-muted small">
                      ادفع بأمان باستخدام بطاقة الائتمان الخاصة بك.
                    </div>
                    <div className="d-flex gap-2 flex-wrap mt-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" alt="MasterCard" className="shippingform-img-15" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="shippingform-img-15" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png" alt="Orange" className="shippingform-img-15" />
                    </div>
                  </div>
                </label>

                {/* الدفع عند الاستلام */}
                <label className="border rounded p-3 d-flex gap-3 align-items-start">
                  <input
                    type="radio"
                    name="payment"
                    className="form-check-input mt-1"
                  />
                  <div className="flex-grow-1 ms-2">
                    <div className="fw-semibold">الدفع عند الاستلام</div>
                    <div className="text-muted small">
                      ادفع نقدًا عند الاستلام.
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* خيارات التوصيل */}
            <div className="d-flex flex-column gap-2">
              <h5 className="fw-bold text-dark">طريقة التوصيل</h5>
              <div className="d-flex flex-column gap-3">

                {/* توصيل إلى المنزل */}
                <label className="border rounded p-3 d-flex gap-3 align-items-start">
                  <input
                    type="radio"
                    name="delivery"
                    className="form-check-input mt-1"
                    defaultChecked
                  />
                  <div className="flex-grow-1 ms-2">
                    <div className="fw-semibold">توصيل إلى المنزل</div>
                    <div className="text-muted small">
                      سيتم توصيل طلبك إلى باب منزلك.
                    </div>
                  </div>
                </label>

                {/* الاستلام من المتجر */}
                <label className="border rounded p-3 d-flex gap-3 align-items-start">
                  <input
                    type="radio"
                    name="delivery"
                    className="form-check-input mt-1"
                  />
                  <div className="flex-grow-1 ms-2">
                    <div className="fw-semibold">الاستلام من المتجر</div>
                    <div className="text-muted small">
                      استلم طلبك مباشرة من المتجر.
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* الأزرار */}
            <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center gap-3 mb-md-0 mb-4">
              <button
                type="button"
                className="w-fit btn text-secondary d-flex justify-content-start align-items-center gap-1"
              >
                <span className="fs-7 fw-semibold">العودة لعربة التسوق</span>
              </button>
              <button
                type="submit"
                className="w-100 w-md-fit btn btn-primary text-center py-2 py-md-4 px-2 rounded-4"
              >
                <span className="fs-7 fw-semibold">المتابعة لطريقة الشحن</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;