import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Shop.css";
import { addToDb } from "../../utilities/fakeDbMine";
import useCarts from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(0);
  const [productPerPage, setProductPerPage] = useState(10);
  const [cart, setCart] = useCarts();

  useEffect(() => {
    fetch(
      `http://localhost:5000/product?activePage=${activePage}&productPerPage=${productPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [activePage, productPerPage]);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        setPageCount(Math.ceil(data.count / 10));
      });
  }, []);

  const addToCartHandler = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity += 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addToCartHandler={addToCartHandler}
          ></Product>
        ))}
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              className={activePage === number ? "selected" : ""}
              onClick={() => setActivePage(number)}
            >
              {number + 1}
            </button>
          ))}
          <select
            onClick={(e) => setProductPerPage(e.target.value)}
            defaultValue={productPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
