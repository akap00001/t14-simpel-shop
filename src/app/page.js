import Image from "next/image";
import Background from "../../public/background.svg";
import Link from "next/link";

import AddToCart from "@/components/AddToCart";

export default function Home() {
  return (
    <main className="home-main">
      {/* <AddToCart id={product.id} title={product.title} price={product.price} image={product.image} /> */}
      <section className="home-color">
        <div>
          <h2>Have you seen this Pot?</h2>
          <h3>Not just your average potted plant. The best kind, of course.</h3>
        </div>

        <Image src={"https://cdn.dummyjson.com/product-images/home-decoration/plant-pot/1.webp"} alt="img" width={650} height={650} className="Home-img" />

        <Link href={"/products/page.js"} className="shop-button">
          SHOP NOW
        </Link>
      </section>
      <section className="home-beige">
        <div>
          <Image src={Background} alt="circle illustration" width={485} height={344} className="background" />
          <h1>
            You Got A Hobby? <br />
            Try SHOPi!
          </h1>
        </div>
      </section>
    </main>
  );
}
