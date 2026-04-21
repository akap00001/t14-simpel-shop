import TheProducts from "./TheProducts"

const FetchProducts = () => {
    return ( 
       <div>
        <MyProducts/>
       </div>
     );
}; 

const MyProducts = async () => {
  "use server";

  const url1 = "https://dummyjson.com/products/category/furniture";
  const url2 = "https://dummyjson.com/products/category/home-decoration";

  const res1 = await fetch(url1);
  const res2 = await fetch(url2);

  const data1 = await res1.json();
  const data2 = await res2.json();

  
  const allProducts = [...data1.products, ...data2.products];

  return (
    <div className="grid">
      {allProducts.map((product) => (
        <TheProducts
          key={product.id}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
          image={product.images[0]}
        />
      ))}
    </div>
  );
};






 
export default FetchProducts;