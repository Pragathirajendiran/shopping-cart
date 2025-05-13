import React from "react";
import ProductList from "../components/ProductList";

const Home = ({ addToCart }) => {
  return (
    <div>
      <ProductList onAddToCart={addToCart} />
    </div>
  );
};

export default Home;
