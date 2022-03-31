import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center" }}>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: {shipping}</p>
      <p>Tax: {tax}</p>
      <p>
        <big>Grand Total: {grandTotal.toFixed(2)}</big>
      </p>
      {props.children}
    </div>
  );
};

export default Cart;
