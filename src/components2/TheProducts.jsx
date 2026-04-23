import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import AddToCart from "@/components/AddToCart";




const TheProducts = ({ title, price, image, discountPercentage,  id }) => {

  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={220}
        height={220}
        className="border"
      />
      <div className="text-wrap">
        <h1>{title}</h1>

        <p>
          <span className="price-red">${price}</span>
          <br />
          <span className="discount"> {discountPercentage}%</span>
        </p>
      </div>
      <MdArrowForwardIos 
 alt={title} size={20} className="arrow" />
    </div>
  );
};

export default TheProducts;


