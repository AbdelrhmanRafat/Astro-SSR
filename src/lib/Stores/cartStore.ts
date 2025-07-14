import { create } from 'zustand';

interface CartStore {
  totalPrice: number;
  numberOfProducts: number;
  setTotalPrice: (value: number) => void;
  setNumberOfProducts: (value: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  totalPrice: 0,
  numberOfProducts: 0,
  setTotalPrice: (value) => set({ totalPrice: value }),
  setNumberOfProducts: (value) => set({ numberOfProducts: value }),
}));