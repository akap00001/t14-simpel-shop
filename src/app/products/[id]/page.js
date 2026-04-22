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
