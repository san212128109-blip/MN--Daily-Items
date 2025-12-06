import React from "react";

const categories = ["Groceries", "Vegetables", "Fruits", "Snacks", "Beverages"];

function Categories() {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="category-buttons">
        {categories.map((cat, i) => (
          <button key={i}>{cat}</button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
