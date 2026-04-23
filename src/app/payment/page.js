import Link from "next/link";
import InCart from "@/components/InCart";

export default function Payment() {
  return (
    <main className="payment-main">
      <h1>CART</h1>

      <div>
        <section>
          <h4>Products</h4>
          <InCart />
        </section>

        <section className="payment-checkout">
          <h2>SUMMARY</h2>

          <div>
            <div>
              <p>TOTAL ITEMS</p>
              <p>$ 750</p>
            </div>

            <span>
              <p>DELIVERY</p>
              <p>FREE</p>
            </span>
          </div>

          <div className="checkout-bottom">
            <div>
              <p className="checkout">Checkout ›</p>
              <p>USD $ 750</p>
            </div>
          </div>
        </section>
      </div>

      <div className="payment-links">
        <Link href={"/products/id/page.js"}>‹ Go Back</Link>
        <Link href={"/products"}>Add More Products ›</Link>
      </div>
    </main>
  );
}

// import AddToCart from "@/components/AddToCart";
{
  /* <AddToCart  id={product.id}
  title={product.title}
  price={product.price}
  image={product.image} />; */
}
