import Image from "next/image";

const TheProducts = ({ title, price, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{price}</p>
      <Image src={image} alt="Picture of furniture" width={220} height={220} />
    </div>
  );
};

export default TheProducts;
