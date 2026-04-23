import Image from "next/image";
import AddToCart from "@/components/AddToCart";

const ProductPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div className="id-grid">
      <div>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={400}
        />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.price} $</p>
        <AddToCart
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.thumbnail}
        
        />
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
