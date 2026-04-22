"use client";
import useCartStore from "@/store/cart";
import { RxCross1 } from "react-icons/rx";

const RemoveFromCart = ({ id }) => {
  //   const { cart, removeCartStore } = useCartStore();

  //   const cart = useCartStore((state) => state.cart);

  const removeCartStore = useCartStore((state) => state.removeCartStore);
  //   cart.some((item) => item.id === id) ? null : (
  return (
    <RxCross1
      size={30}
      color="#93A1A4"
      className="remove"
      onClick={() => {
        removeCartStore(id);
      }}
    />
  );
};

export default RemoveFromCart;
