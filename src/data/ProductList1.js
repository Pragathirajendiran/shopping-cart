// src/components/ProductList.js
import React from "react";
import products from "../data/products"; // Correct path to products.js

import "./ProductList.css"; // Optional, if you have custom styles

<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
  {products.map((product) => (
    <div key={product.id} className="col">
      <div className="product-card shadow h-100">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <div className="product-details text-center">
          <h5 className="product-title">{product.title}</h5>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button className="btn btn-warning btn-sm w-100">Add to Cart</button>
        </div>
      </div>
    </div>
  ))}
</div>;

export default ProductList;
