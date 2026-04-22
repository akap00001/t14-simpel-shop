"use client";
import useCartStore from "@/store/cart";
import Image from "next/image";
import RemoveFromCart from "./RemoveFromCart";
import { GoTriangleDown } from "react-icons/go";

const InCart = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div>
      {cart.map((item) => (
        <article key={item.id} className="payment-product">
          <div className="product-info">
            <Image src={item.image} alt="img" width={200} height={200} className="payment-img" />

            <div>
              <h3>{item.title}</h3>
              <p className="category">CATEGORY: HOME-DECORATION</p>
              <span>
                <p>IN STOCK</p>
              </span>
            </div>
          </div>

          <div className="details">
            <div>
              <span>Quantity</span>
              <p className="quantity">
                1 <GoTriangleDown />
              </p>
            </div>
            <div>
              <span>Price</span>
              <p>{item.price}</p>
            </div>
            <RemoveFromCart id={item.id} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default InCart;
