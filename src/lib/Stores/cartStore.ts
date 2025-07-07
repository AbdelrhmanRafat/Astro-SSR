import { create } from 'zustand';

interface CartStore {
  totalPrice: number;
  setTotalPrice: (value: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  totalPrice: 0,
  setTotalPrice: (value) => set({ totalPrice: value }),
}));