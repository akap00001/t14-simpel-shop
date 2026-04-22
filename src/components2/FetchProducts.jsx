
"use client";
import { useState, useEffect } from "react";
import TheProducts from "./TheProducts";

const FetchProducts = ({ activeFilter }) => {
  const [products, setProducts] = useState([]);


    const fetchData = async () => {
      const res1 = await fetch(
        "https://dummyjson.com/products/category/furniture",
      );
      const res2 = await fetch(
        "https://dummyjson.com/products/category/home-decoration",
      );
      const data1 = await res1.json();
      const data2 = await res2.json();
      setProducts([...data1.products, ...data2.products]);
    };
     useEffect(() => {
    fetchData();
  }, []);

  const filtered = products.filter((product) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Furniture") return product.category === "furniture";
    if (activeFilter === "Home") return product.category === "home-decoration";
  });

  return (
    <article className="grid">
      {filtered.map((product) => (
        <TheProducts
          key={product.id}
          title={product.title}
          price={product.price}
          discountPercentage={product.discountPercentage}
          image={product.images[0]}
        />
      ))}
    </article>
  );
};

export default FetchProducts;
