import React from 'react';

export interface CartQuantityControlsProps {
  productId: string;
  count: number;
}

const CartQuantityControls: React.FC<CartQuantityControlsProps> = ({ productId, count }) => {
  return (
    <div className="flex items-center gap-2 mt-3 sm:mt-0">
      <form method="POST" action="/server/cart/update-qty-form">
        <input type="hidden" name="productId" value={productId} />
        <input type="hidden" name="count" value={count + 1} />
        <button
          type="submit"
          className="qty-plus cursor-pointer bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-lg"
        >
          +
        </button>
      </form>
      <span className="text-lg" id={`count-${productId}`}>{count}</span>
      <form method="POST" action="/server/cart/update-qty-form">
        <input type="hidden" name="productId" value={productId} />
        <input type="hidden" name="count" value={count > 1 ? count - 1 : 1} />
        <button
          type="submit"
          className="qty-minus cursor-pointer bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-lg disabled:opacity-50"
          disabled={count <= 1}
        >
          -
        </button>
      </form>
    </div>
  );
};

export default CartQuantityControls;