import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, addToCartHandler }) => {
  //   const { product, addToCartHandler } = props;
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-menufacturer">Menufecturer: {seller}</p>
        <p className="product-rating">Rating: {ratings} star</p>
      </div>
      <button onClick={() => addToCartHandler(product)} className="btn-cart">
        Add to Cart
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
