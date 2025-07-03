import React from 'react';
const ShimmerCart = () => {
  return (
    <div className="bg-white rounded shadow-sm p-3 p-md-4 w-100 w-md-75">
      <div className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center gap-3 placeholder-glow">
          <div className="d-flex align-items-center gap-3">
            <div className="position-relative">
              <div className="placeholder rounded placeholder-md"></div>
              <div className="position-absolute bg-secondary rounded-circle placeholder-sm" style={{ top: '-8px', left: '-8px' }}></div>
            </div>
            <div>
              <div className="placeholder rounded placeholder-label w-200 mb-1"></div>
              <div className="placeholder rounded placeholder-label w-80"></div>
            </div>
          </div>
          <div className="text-end">
            <div className="placeholder rounded placeholder-label w-90"></div>
          </div>
        </div>

        <div className="placeholder-glow">
          <div className="placeholder rounded placeholder-md w-100"></div>
        </div>

        {[1, 2].map((_, i) => (
          <div className="border rounded p-3 placeholder-glow" key={i}>
            <div className="d-flex justify-content-start align-items-center gap-2">
              <div className="placeholder rounded-circle placeholder-sm"></div>
              <div className="flex-grow-1">
                <div className="placeholder rounded placeholder-label w-85"></div>
              </div>
            </div>
          </div>
        ))}

        <div className="w-100 d-flex flex-column gap-2 placeholder-glow" dir="rtl">
          {["100", "60", "80"].map((width, i) => (
            <div className="d-flex justify-content-between" key={i}>
              <div className={`placeholder rounded placeholder-label w-${width}`}></div>
              <div className="d-flex align-items-center gap-2">
                <div className={`placeholder rounded placeholder-label w-${parseInt(width) + 30}`}></div>
                {i === 2 && <div className="placeholder rounded placeholder-label w-30"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShimmerCart;