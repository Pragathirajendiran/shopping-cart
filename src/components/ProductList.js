import React from "react";
import products from "../data/products";
import "./ProductList.css";

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        Today's Deals 
      </h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                alt={product.title}
                className="card-img-top product-image"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body text-center d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <button
                  className="btn btn-warning btn-sm mt-auto"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
