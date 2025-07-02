import { useState } from 'react';

function CouponInput() {
  const [code, setCode] = useState('');

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .custom-input {
          padding-top: 1.25rem;
        }

        .custom-label {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.2s ease;
          font-size: 1rem;
          color: #6c757d;
          pointer-events: none;
        }

        .custom-input:focus + .custom-label,
        .custom-input.filled + .custom-label {
          top: 0.25rem;
          font-size: 0.75rem;
          color: #000;
        }
      `}</style>

      {/* Coupon Input with Floating Label */}
      <div className="d-flex align-items-stretch gap-3 mt-4" style={{ minWidth: 0 }}>
        <div className="position-relative flex-grow-1 w-100">
          <input
            type="text"
            id="couponCode"
            className={`form-control  custom-input ${code ? 'filled' : ''}`}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <label htmlFor="couponCode" className="custom-label">
            أدخل كود الخصم
          </label>
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