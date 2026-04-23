"use client";
import useCartStore from "@/store/cart";

const AddToCart = ({ id, title, price, image }) => {
  //   const { cart, setCartStore } = useCartStore();
  //   if (cart.some((item) => item.id === id)) {
  //   const cart = useCartStore((state) => state.cart);
  const setCartStore = useCartStore((state) => state.setCartStore);
 
  
  return (
    <div>
      <button
        className="add"
        onClick={() => {
    
          setCartStore(id, title, price, image);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
