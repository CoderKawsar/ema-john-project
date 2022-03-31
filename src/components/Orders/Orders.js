import React from "react";
import { useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakeDbMine";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const [products, setProdcts] = useProducts();
  const [cart, setCart] = useCarts(products);

  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((prod) => prod.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-items-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={() => navigate("/inventory")}>
            Proceed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
