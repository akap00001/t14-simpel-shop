import TheProducts from "./TheProducts";
import AddToCart from "@/components/AddToCart";

const FetchProducts = () => {
  return (
    <div>
      <MyProducts />
    </div>
  );
};

const MyProducts = async () => {
  "use server";
  const url = "https://dummyjson.com/products/category/furniture";

  const response = await fetch(url);

  const OurProducts = await response.json();

  return OurProducts.products.map((product) => {
    return <TheProducts key={product.id} title={product.title} price={product.price} image={product.images[0]} />;
  });
};

export default FetchProducts;
