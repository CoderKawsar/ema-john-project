import React, { useState } from "react";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    const shipping = { name, email, address, phone };
    console.log(shipping);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipment</h2>
        <form onSubmit={handleShippingSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id="address"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="text"
              name="phone"
              id="phone"
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <input
            type="submit"
            className="form-submit"
            value="Proceed Shippment"
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
