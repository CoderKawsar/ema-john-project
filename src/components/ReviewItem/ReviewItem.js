import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveProduct }) => {
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review-item-details-container">
        <div className="review-item-details">
          <h4 title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </h4>
          <p>
            Price: <span>{price}</span>
          </p>
          <p>
            Shipping Charge: <span>{shipping}</span>
          </p>
          <p>
            Quantity: <small>{quantity}</small>
          </p>
        </div>
        <div
          onClick={() => handleRemoveProduct(product)}
          className="delete-btn"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
