import Image from "next/image";
import Background from "../../public/background.svg";

export default function Home() {
  return (
    <main className="home-main">
      <section className="home-color">
        <div>
          <h2>Have you seen this Pot?</h2>
          <h3>Not just your average potted plant. The best kind, of course.</h3>
        </div>
        {/* <div className="placeholder"></div> */}
        {/* <Image src={"https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp"} alt="img" width={700} height={700} className="Home-img" /> */}
        <div>
          <button className="shop-button">SHOP NOW</button>
        </div>
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
