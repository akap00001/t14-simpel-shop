const FilteringCard = ({ setActiveFilter, activeFilter }) => {
  return (
    <section id="filters" className="Filtering-grid">
      <button
        onClick={() => setActiveFilter("All")}
        className={activeFilter === "All" ? "active" : ""}
      >
        All
      </button>
      <button
        onClick={() => setActiveFilter("Furniture")}
        className={activeFilter === "Furniture" ? "active" : ""}
      >
        Furniture
      </button>
      <button
        onClick={() => setActiveFilter("Home")}
        className={activeFilter === "Home" ? "active" : ""}
      >
        Home Decor
      </button>
    </section>
  );
};
export default FilteringCard;
