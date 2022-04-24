import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/fakeDbMine";

const useCarts = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const keys = Object.keys(storedCart);

    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storedCart) {
          const addedProduct = products.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
      });
    setCart(savedCart);
  }, []);

  return [cart, setCart];
};

export default useCarts;
