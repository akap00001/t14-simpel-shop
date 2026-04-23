import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist((set) => ({
    cart: [],

    setCartStore: (id, title, price, image) =>
      set((state) => ({
        cart: [
          ...state.cart,
          { id: id, title: title, price: price, image: image },
        ],
      })),

    removeCartStore: (id) =>
      set((state) => ({
        cart: state.cart.filter((item) => item.id !== Number(id)),
      })),
  }))
);
export default useCartStore;
