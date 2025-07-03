import { useState } from 'react';

function CouponInput() {
  const [code, setCode] = useState('');

  return (
    <>
    <div className="d-flex align-items-stretch gap-3 mt-4 w-100">
  <div className="form-floating flex-grow-1 w-100">
    <input
      type="text"
      className="form-control"
      id="couponCode"
      placeholder="أدخل كود الخصم"
      value={code}
      onChange={(e) => setCode(e.target.value)}
    />
    <label htmlFor="couponCode">أدخل كود الخصم</label>
  </div>

  <button
    type="button"
    className={`btn text-nowrap ${code.trim() ? 'btn-primary' : 'btn-outline-secondary'}`}
  >
    تطبيق الكود
  </button>
</div>

    </>
  );
}

export default CouponInput;