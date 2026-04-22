import Image from "next/image";
import AddToCart from "@/components/AddToCart";

const TheProducts = ({ title, price, image, id }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <Image src={image} alt="Picture of furniture" width={220} height={220} />
    </div>
  );
};

export default TheProducts;

{
  /* <AddToCart  id={product.id}
  title={product.title}
  price={product.price}
  image={product.image} />; */
}
