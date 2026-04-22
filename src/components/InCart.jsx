"use client";
import useCartStore from "@/store/cart";
import Image from "next/image";
import RemoveFromCart from "./RemoveFromCart";

const InCart = () => {
  const cart = useCartStore((state) => state.cart);

  return (
    <div>
      {cart.map((item) => (
        <article key={item.id} className="payment-product">
          <div className="product-info">
            {/* Husk at tilføje billede og pris */}
            <Image src={item.image} alt="img" width={200} height={200} className="payment-img" />

            <div>
              <h3>{item.title}</h3>
              <p>CATEGORY: HOME-DECORATION</p>
              <p className="light">IN STOCK</p>
            </div>
          </div>

          <div className="details">
            <div>
              <span>Quantity</span>
              <p>1 ▼</p>
            </div>
            <div>
              <span>Price</span>
              <p>$19.99</p>
            </div>
            <RemoveFromCart id={item.id} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default InCart;
