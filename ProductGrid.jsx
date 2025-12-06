import React from "react";

const products = [
  { id: 1, name: "Rice 5kg", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Sugar 2kg", price: "$10", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Milk 1L", price: "$5", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Eggs 12pcs", price: "$6", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Oil 1L", price: "$8", image: "https://via.placeholder.com/150" },
];

function ProductGrid() {
  return (
    <section className="products">
      <h2>Hot Deals</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
