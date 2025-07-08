import { c as createComponent, g as renderComponent, f as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Z0VxRGOD.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_DnlBvVy5.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
/* empty css                                 */
import { useState, useEffect, useCallback, useRef } from 'react';
import { create } from 'zustand';
export { renderers } from '../renderers.mjs';

const ShimmerForm = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-white h-100 d-flex flex-column gap-3 pt-2 pt-md-0", children: /* @__PURE__ */ jsx("div", { className: "container-lg w-100 px-0 px-md-3 mx-0 mx-md-auto row", children: /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center justify-content-md-end align-items-center p-md-3", children: /* @__PURE__ */ jsxs("form", { className: "d-flex flex-column gap-4 col-lg-9 col-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded fw-bold shimmerform-placeholder-24-150" }) }),
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-58" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded fw-bold shimmerform-placeholder-24-120" }) }),
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-58" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row g-2 g-md-3", children: [
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-12", children: /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-58" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-12", children: /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-58" }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-58" }) }),
      /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-6", children: /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-58" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-58" }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-100", children: /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between border bg-white rounded-3 px-2 shimmerform-placeholder-58", children: [
        /* @__PURE__ */ jsx("div", { className: "placeholder rounded flex-grow-1 shimmerform-placeholder-40" }),
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-20" }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded fw-bold shimmerform-placeholder-24-120" }) }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "border rounded p-3 d-flex gap-3 align-items-start placeholder-glow", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-circle mt-1", style: { width: "16px", height: "16px" } }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded mb-2", style: { height: "18px", width: "120px" } }),
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded mb-2", style: { height: "14px", width: "280px" } }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex gap-2 flex-wrap", children: [
              /* @__PURE__ */ jsx("div", { className: "placeholder rounded", style: { width: "30px", height: "20px" } }),
              /* @__PURE__ */ jsx("div", { className: "placeholder rounded", style: { width: "30px", height: "20px" } }),
              /* @__PURE__ */ jsx("div", { className: "placeholder rounded", style: { width: "30px", height: "20px" } })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border rounded p-3 d-flex gap-3 align-items-start placeholder-glow", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-circle mt-1", style: { width: "16px", height: "16px" } }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded mb-2", style: { height: "18px", width: "140px" } }),
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded", style: { height: "14px", width: "180px" } })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded fw-bold shimmerform-placeholder-24-120" }) }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "border rounded p-3 d-flex gap-3 align-items-start placeholder-glow", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-circle mt-1", style: { width: "16px", height: "16px" } }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded mb-2", style: { height: "18px", width: "120px" } }),
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded", style: { height: "14px", width: "220px" } })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border rounded p-3 d-flex gap-3 align-items-start placeholder-glow", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-circle mt-1", style: { width: "16px", height: "16px" } }),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded mb-2", style: { height: "18px", width: "140px" } }),
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded", style: { height: "14px", width: "200px" } })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column-reverse flex-md-row justify-content-between align-items-center gap-3 mb-md-0 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-40-140" }) }),
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmerform-placeholder-56-160" }) })
    ] })
  ] }) }) }) });
};

const ShimmerCart = () => {
  return /* @__PURE__ */ jsx("div", { className: "border-start border-2 border-light-subtle", children: /* @__PURE__ */ jsx("div", { className: "shimmercart-sticky-top", children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "py-2 p-md-3", children: /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "d-none mb-5 d-lg-block col-md-9 col-12", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("div", { className: "placeholder-glow mb-3", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-2 pb-2", children: [
      /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmercart-placeholder-20" }),
      /* @__PURE__ */ jsx("div", { className: "placeholder rounded shimmercart-placeholder-24-100" })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-1 p-1", children: [
      /* @__PURE__ */ jsx("div", { className: "d-flex flex-column gap-3", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center p-3 rounded-3 placeholder-glow", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "position-relative", children: [
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-64" }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "position-absolute bg-secondary rounded-circle shimmercart-position-absolute"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 mb-1 shimmercart-placeholder-18-180" }),
            /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-14-80" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-end", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-18-80" }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "placeholder-glow", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-48" }) }),
      [1, 2].map((_, i) => /* @__PURE__ */ jsx("div", { className: "border border-secondary rounded p-3 placeholder-glow", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-start align-items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: "placeholder rounded-circle shimmercart-placeholder-20" }),
        /* @__PURE__ */ jsx("div", { className: "flex-grow-1", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-14-85" }) })
      ] }) }, i)),
      /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-3 pt-3 placeholder-glow", children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-16-100" }),
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-16-80" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-16-60" }),
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-16-70" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-16-70" }),
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-16-65" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-20-100" }),
          /* @__PURE__ */ jsx("div", { className: "d-flex align-items-center gap-2", children: /* @__PURE__ */ jsx("div", { className: "placeholder rounded-3 shimmercart-placeholder-24-120" }) })
        ] }) })
      ] })
    ] })
  ] }) }) }) }) }) });
};

const ShimmerLoader = () => {
  return /* @__PURE__ */ jsx("div", { dir: "rtl", className: "bg-white", children: /* @__PURE__ */ jsx("div", { className: "w-100", children: /* @__PURE__ */ jsxs("div", { className: "row g-0", children: [
    /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 order-2 order-lg-1", children: /* @__PURE__ */ jsx(ShimmerForm, {}) }),
    /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 order-1 order-lg-2 d-none d-lg-block", style: { backgroundColor: "#F3F4F5" }, children: /* @__PURE__ */ jsx(ShimmerCart, {}) })
  ] }) }) });
};

const ShippingForm = () => {
  const [mobile, setMobile] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [deliveryMethod, setDeliveryMethod] = useState("home");
  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setMobile(value);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-white h-100 d-flex flex-column gap-3 pt-2 pt-md-0", children: /* @__PURE__ */ jsx("div", { className: "container-lg w-100 px-0 px-md-3 mx-0 mx-md-auto row", children: /* @__PURE__ */ jsx("div", { className: "d-flex justify-content-center justify-content-md-end align-items-center p-md-3", children: /* @__PURE__ */ jsxs("form", { className: "d-flex flex-column gap-4 col-lg-9 col-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("h5", { className: "fw-bold text-dark", children: "معلومات التواصل" }),
      /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            id: "phoneOrEmail",
            className: "form-control form-control-lg border fs-6",
            placeholder: "الايميل أو رقم التليفون"
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "phoneOrEmail", className: "text-muted fs-7", children: "الايميل أو رقم التليفون" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("h5", { className: "fw-bold text-dark", children: "عنوان الشحن" }),
      /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "country",
            className: "form-select fs-6 shippingform-select-custom shippingform-select-country",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "اختر البلد" }),
              /* @__PURE__ */ jsx("option", { children: "مصر" }),
              /* @__PURE__ */ jsx("option", { children: "السعودية" }),
              /* @__PURE__ */ jsx("option", { children: "الإمارات" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "country", className: "text-muted fs-7", children: "بلد" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row g-2 g-md-3", children: [
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-12", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "form-control form-control-lg border fs-6",
              id: "firstName",
              placeholder: "الاسم الأول"
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "firstName", className: "text-muted fs-7", children: "الاسم الأول" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 col-12", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "form-control form-control-lg border fs-6",
              id: "lastName",
              placeholder: "الاسم الثاني"
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "lastName", className: "text-muted fs-7", children: "الاسم الثاني" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            className: "form-control form-control-lg border fs-6",
            id: "address",
            placeholder: "العنوان"
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "address", className: "text-muted fs-7", children: "العنوان" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
        /* @__PURE__ */ jsx("div", { className: "col-12 col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              className: "form-control form-control-lg border fs-6",
              id: "city",
              placeholder: "مدينة"
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "city", className: "text-muted fs-7", children: "مدينة" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "governorate",
              className: "form-select fs-6 shippingform-select-custom shippingform-select-governorate",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", children: "اختر المحافظة" }),
                /* @__PURE__ */ jsx("option", { children: "القاهرة" }),
                /* @__PURE__ */ jsx("option", { children: "الجيزة" }),
                /* @__PURE__ */ jsx("option", { children: "الإسكندرية" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "governorate", className: "text-muted fs-7", children: "محافظة" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "w-100", children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center justify-content-between border bg-white rounded-3 px-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "form-floating flex-grow-1", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "mobile",
              value: mobile,
              onChange: handleMobileChange,
              className: "form-control border-0 shadow-none bg-transparent fs-6 shippingform-input-mobile",
              placeholder: "رقم الموبايل"
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "mobile", className: "text-muted fs-7", children: "رقم الموبايل للتواصل بخصوص الطلب" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("svg", { className: "text-muted", width: "20", height: "20", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
            clipRule: "evenodd"
          }
        ) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("h5", { className: "fw-bold text-dark", children: "طريقة الدفع" }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-3", children: [
        /* @__PURE__ */ jsxs("label", { className: "border rounded p-3 d-flex gap-3 align-items-start", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "payment",
              className: "form-check-input mt-1",
              defaultChecked: true
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "fw-semibold", children: "بطاقة ائتمان" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted small", children: "ادفع بأمان باستخدام بطاقة الائتمان الخاصة بك." }),
            /* @__PURE__ */ jsxs("div", { className: "d-flex gap-2 flex-wrap mt-2", children: [
              /* @__PURE__ */ jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png", alt: "MasterCard", className: "shippingform-img-15" }),
              /* @__PURE__ */ jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png", alt: "Visa", className: "shippingform-img-15" }),
              /* @__PURE__ */ jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/200px-Orange_logo.svg.png", alt: "Orange", className: "shippingform-img-15" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "border rounded p-3 d-flex gap-3 align-items-start", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "payment",
              className: "form-check-input mt-1"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "fw-semibold", children: "الدفع عند الاستلام" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted small", children: "ادفع نقدًا عند الاستلام." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
      /* @__PURE__ */ jsx("h5", { className: "fw-bold text-dark", children: "طريقة التوصيل" }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-3", children: [
        /* @__PURE__ */ jsxs("label", { className: "border rounded p-3 d-flex gap-3 align-items-start", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "delivery",
              className: "form-check-input mt-1",
              defaultChecked: true
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "fw-semibold", children: "توصيل إلى المنزل" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted small", children: "سيتم توصيل طلبك إلى باب منزلك." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "border rounded p-3 d-flex gap-3 align-items-start", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "delivery",
              className: "form-check-input mt-1"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex-grow-1 ms-2", children: [
            /* @__PURE__ */ jsx("div", { className: "fw-semibold", children: "الاستلام من المتجر" }),
            /* @__PURE__ */ jsx("div", { className: "text-muted small", children: "استلم طلبك مباشرة من المتجر." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column-reverse flex-md-row justify-content-between align-items-center gap-3 mb-md-0 mb-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: "w-fit btn text-secondary d-flex justify-content-start align-items-center gap-1",
          children: /* @__PURE__ */ jsx("span", { className: "fs-7 fw-semibold", children: "العودة لعربة التسوق" })
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          className: "w-100 w-md-fit btn btn-primary text-center py-2 py-md-4 px-3 rounded-4",
          children: /* @__PURE__ */ jsx("span", { className: "fs-7 fw-semibold", children: "المتابعة لطريقة الشحن" })
        }
      )
    ] })
  ] }) }) }) });
};

const useCartStore = create((set) => ({
  totalPrice: 0,
  setTotalPrice: (value) => set({ totalPrice: value })
}));

const ChevronIcon = ({ open }) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    className: `chevron-icon${open ? " open" : " closed"}`,
    children: /* @__PURE__ */ jsx("path", { d: "M12 15.5c-.3 0-.5-.1-.7-.3l-5.5-5.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0L12 13.3l4.8-4.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5.5 5.5c-.2.2-.4.3-.7.3z" })
  }
);

const CartItems = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "كوفي كورنر 40×120سم - LOG674",
      code: "CODE123",
      price: 150,
      image: "https://static.vecteezy.com/system/resources/previews/042/681/826/non_2x/illustration-of-wooden-mahogany-side-chair-on-white-vector.jpg",
      quantity: 2,
      maxQty: 4
    },
    {
      id: 2,
      name: "مكتب خشب طبيعي مودرن - MOD222",
      code: "CODE456",
      price: 250,
      image: "https://www.hokybo.com/CompanyData/Product/12MD011C(HG).jpg?09-03-2024%2014:26:56",
      quantity: 1,
      maxQty: 10
    }
  ]);
  const [deletingId, setDeletingId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const { setTotalPrice } = useCartStore();
  useEffect(() => {
    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [cart, setTotalPrice]);
  const incrementQty = useCallback((id) => {
    setUpdatingId(id);
    setTimeout(() => {
      setCart(
        (prev) => prev.map(
          (item) => item.id === id && item.quantity < item.maxQty ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      setUpdatingId(null);
    }, 150);
  }, []);
  const decrementQty = useCallback((id) => {
    setUpdatingId(id);
    setTimeout(() => {
      setCart(
        (prev) => prev.map(
          (item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
      setUpdatingId(null);
    }, 150);
  }, []);
  const deleteItem = useCallback((id) => {
    setDeletingId(id);
    setTimeout(() => {
      setCart((prev) => prev.filter((item) => item.id !== id));
      setDeletingId(null);
    }, 400);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "d-flex flex-column gap-3", children: cart.map((item) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: `d-flex justify-content-between align-items-center py-2 border-bottom ${deletingId === item.id ? "fade-out" : ""}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "position-relative", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                alt: item.name,
                className: "rounded-3 shadow-sm",
                style: {
                  width: "64px",
                  height: "64px",
                  objectFit: "cover"
                }
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm ${updatingId === item.id ? "quantity-updating" : ""}`,
                style: {
                  top: "-8px",
                  left: "-8px",
                  width: "24px",
                  height: "24px",
                  fontSize: "11px",
                  fontWeight: "bold"
                },
                children: item.quantity
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h6", { className: "fw-semibold text-dark mb-1", children: item.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted small mb-1", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-tag me-1" }),
              item.code
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn btn-link p-0 text-danger small delete-btn-enhanced",
                onClick: () => deleteItem(item.id),
                disabled: deletingId === item.id,
                "aria-label": `حذف ${item.name}`,
                children: deletingId === item.id ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "spinner-border spinner-border-sm me-1",
                      style: { width: "12px", height: "12px" },
                      role: "status",
                      children: /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "جاري الحذف..." })
                    }
                  ),
                  "جاري الحذف..."
                ] }) : "إزالة"
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "d-flex align-items-center border rounded overflow-hidden mt-1 qty-controls",
                style: { width: "110px" },
                children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "btn btn-sm btn-light flex-fill border-end qty-btn",
                      onClick: () => decrementQty(item.id),
                      disabled: item.quantity <= 1 || deletingId === item.id || updatingId === item.id,
                      "aria-label": "تقليل الكمية",
                      children: updatingId === item.id ? /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "spinner-border spinner-border-sm",
                          style: { width: "10px", height: "10px" },
                          role: "status",
                          children: /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Loading..." })
                        }
                      ) : "-"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "flex-fill text-center small", children: item.quantity }),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "btn btn-sm btn-light flex-fill border-start qty-btn",
                      onClick: () => incrementQty(item.id),
                      disabled: item.quantity >= item.maxQty || deletingId === item.id || updatingId === item.id,
                      "aria-label": "زيادة الكمية",
                      children: updatingId === item.id ? /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "spinner-border spinner-border-sm",
                          style: { width: "10px", height: "10px" },
                          role: "status",
                          children: /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Loading..." })
                        }
                      ) : "+"
                    }
                  )
                ]
              }
            ),
            item.quantity >= item.maxQty && /* @__PURE__ */ jsxs("div", { className: "text-warning small mt-1", children: [
              /* @__PURE__ */ jsx("i", { className: "bi bi-exclamation-triangle me-1" }),
              "الحد الأقصى: ",
              item.maxQty,
              " قطع"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-end align-items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "fw-bold text-black mb-0", children: (item.price * item.quantity).toFixed(2) }),
          /* @__PURE__ */ jsx("span", { className: "text-muted", children: "ج.م" })
        ] })
      ]
    },
    item.id
  )) });
};

function CouponInput() {
  const [code, setCode] = useState("");
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-stretch gap-3 mt-4 w-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "form-floating flex-grow-1 w-100", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          className: "form-control",
          id: "couponCode",
          placeholder: "أدخل كود الخصم",
          value: code,
          onChange: (e) => setCode(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "couponCode", children: "أدخل كود الخصم" })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: `btn text-nowrap ${code.trim() ? "btn-primary" : "btn-outline-secondary"}`,
        children: "تطبيق الكود"
      }
    )
  ] }) });
}

const OrderSummary = () => {
  const totalPrice = useCartStore((state) => state.totalPrice);
  return /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-2", children: [
    /* @__PURE__ */ jsx(CartItems, {}),
    /* @__PURE__ */ jsx(CouponInput, {}),
    [1, 2].map((_, i) => /* @__PURE__ */ jsx("div", { className: "border border-secondary rounded p-3", children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-start align-items-center gap-2", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 512 512", fill: "none", stroke: "#606060", strokeWidth: "32", children: [
        /* @__PURE__ */ jsx("circle", { cx: "256", cy: "256", r: "208" }),
        /* @__PURE__ */ jsx("line", { x1: "256", y1: "160", x2: "256", y2: "280" }),
        /* @__PURE__ */ jsx("circle", { cx: "256", cy: "344", r: "16", fill: "#606060" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "small text-muted mb-0", children: "ملاحظة: رسوم إضافية 50 جنيه لهذا المنتج" })
    ] }) }, i)),
    /* @__PURE__ */ jsxs("div", { className: "d-flex flex-column gap-3 pt-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted", children: "المجموع الفرعي:" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-end align-items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "fw-semibold", children: totalPrice }),
          /* @__PURE__ */ jsx("span", { className: "text-muted", children: "ج.م" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted", children: "الشحن:" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-end align-items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "fw-semibold", children: "50.00" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted", children: "ج.م" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted", children: "الضرائب:" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-end align-items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "fw-semibold", children: "25.00" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted", children: "ج.م" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-between align-items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "h6 fw-bold text-dark", children: "المجموع الكلي:" }),
        /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-end align-items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "h5 fw-bold text-black mb-0", children: totalPrice }),
          /* @__PURE__ */ jsx("span", { className: "text-muted", children: "ج.م" })
        ] })
      ] }) })
    ] })
  ] });
};

const Cart = () => {
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");
  const totalPrice = useCartStore((state) => state.totalPrice);
  useEffect(() => {
    if (showMobileSummary && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [showMobileSummary]);
  return /* @__PURE__ */ jsx("div", { className: "border-start border-2 border-light-subtle sticky-md-top", children: /* @__PURE__ */ jsx("div", { className: "container-fluid", children: /* @__PURE__ */ jsxs("div", { className: "py-2 p-md-3", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "d-lg-none d-flex justify-content-between align-items-center py-2 cart-mobile-header-toggle",
        onClick: () => setShowMobileSummary((prev) => !prev),
        children: [
          /* @__PURE__ */ jsxs("div", { className: "d-flex align-items-center gap-2", children: [
            /* @__PURE__ */ jsx(ChevronIcon, { open: showMobileSummary }),
            /* @__PURE__ */ jsx("span", { className: "fw-bold text-black", children: "ملخص الطلب" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "d-flex justify-content-end align-items-center gap-1", children: [
            /* @__PURE__ */ jsx("span", { className: "fw-bold text-dark", children: totalPrice }),
            /* @__PURE__ */ jsx("span", { className: "text-muted", children: "ج.م" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "d-lg-none cart-mobile-content",
          style: { height: showMobileSummary ? height : "0px" },
          ref: contentRef,
          children: /* @__PURE__ */ jsx(OrderSummary, {})
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "d-none d-md-block col-md-9 col-12", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsx("h5", { className: "fw-bold text-dark mb-3 pb-2", children: "ملخص الطلب" }) }),
        /* @__PURE__ */ jsx(OrderSummary, {})
      ] }) })
    ] })
  ] }) }) });
};

const ShoppingCartUI = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2e3);
    return () => clearTimeout(timer);
  }, []);
  return (
    // dir="rtl" Here is very Important....
    /* @__PURE__ */ jsx("div", { dir: "rtl", className: "bg-white", children: /* @__PURE__ */ jsx("div", { className: "w-100", children: isLoading ? /* @__PURE__ */ jsx(ShimmerLoader, {}) : /* @__PURE__ */ jsxs("div", { className: "row g-0", children: [
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 order-2 order-lg-1 bg-white", children: /* @__PURE__ */ jsx(ShippingForm, {}) }),
      /* @__PURE__ */ jsx("div", { className: "col-12 col-lg-6 order-1 order-lg-2 shoppingcartui-cart-bg", children: /* @__PURE__ */ jsx(Cart, {}) })
    ] }) }) })
  );
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0639\u0631\u0628\u0629 \u0627\u0644\u062A\u0633\u0648\u0642" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-5 bg-white border-bottom border-primary"></div> ${renderComponent($$result2, "ShoppingCartUI", ShoppingCartUI, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/components/ReactComponents/ShoppingCartUI/ShoppingCartUI", "client:component-export": "default" })} <div class="p-5 bg-light border-top border-primary"></div> ` })}`;
}, "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/ShimmerLoading/index.astro", void 0);

const $$file = "/Users/macbook/Desktop/Astro/Astro-SSR-main/src/pages/ShimmerLoading/index.astro";
const $$url = "/ShimmerLoading";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
