import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Checkout.css'

const CenterdForm = ({ products }) => {
      const totalAmount = products
        .reduce((total, product) => total + product.price * product.quantity, 0)
        .toFixed(2);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send order details to the server or email (you'll implement this part)
    alert("Order placed successfully!");
  };
  const navigate = useNavigate();

  return (
    <div className="checkout">
      <h2>Total Amount: #{totalAmount}</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <div className="click-btn">
          <button onClick={() => navigate("/")} className="btn-dark ">
            Back to Booking
          </button>
          <button type="submit" className="btn-dark">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CenterdForm;
