// const ProductPage = async ({ params }) => {
//   const res = await fetch(`https://dummyjson.com/products/${params.id}`);
//   const product = await res.json();

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={product.images} alt={product.title} />
//       <p>{product.price} $</p>
//       <p>{product.description}</p>
//     </div>
//   );
// };

// export default ProductPage;


"use client";
import { useState } from "react";
import FilteringCard from "@/components2/FilteringCard";
import FetchProducts from "@/components2/FetchProducts";


export default function Page() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div>
      <FilteringCard
        setActiveFilter={setActiveFilter}
        activeFilter={activeFilter}
      />
      <FetchProducts activeFilter={activeFilter} />

     

    </div>
  );
}

