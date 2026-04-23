import Image from "next/image";

const ProductPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  console.log(product); 
  return (
    <div>
      <h1>{product.title}</h1>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={400}
        height={400}
      />
      <p>{product.price} $</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductPage;
