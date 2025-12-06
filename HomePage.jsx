import React from "react";
import Categories from "./Categories";
import ProductGrid from "./ProductGrid";
import PromoSection from "./PromoSection";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Welcome to MN Daily Item</h1>
          <p>Fresh & Daily Essentials Delivered to Your Doorstep!</p>
          <button>Shop Now</button>
        </div>
      </section>
      <Categories />
      <ProductGrid />
      <PromoSection />
    </div>
  );
}

export default HomePage;
