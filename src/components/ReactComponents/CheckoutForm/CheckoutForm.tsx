import { useState } from "react";
import './CheckoutForm.css';
import PaymentOptions from "../PaymentOptions/PaymentOptions";
import DeliveryOptions from "../DeliveryOptions/DeliveryOptions";
import CheckoutFormButtons from "../CheckoutFormButtons/CheckoutFormButtons";
import AcceptCheckOutPolicy from "../AcceptCheckOutPolicy/AcceptCheckOutPolicy";

const CheckoutForm: React.FC = () => {
  const [mobile, setMobile] = useState("");
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
                  className="form-select fs-6 checkoutform-select-custom checkoutform-select-country"
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
                      className="form-select fs-6 checkoutform-select-custom checkoutform-select-governorate"
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
                      className="form-control border-0 shadow-none bg-transparent fs-6 checkoutform-input-mobile"
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

            {/*  Payment Options */}
            <PaymentOptions />

            {/*  Delivery Options */}
            <DeliveryOptions />
             {/* CheckBoxes Policy */}
             <AcceptCheckOutPolicy />
            {/* Buttons */}
             <CheckoutFormButtons />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;