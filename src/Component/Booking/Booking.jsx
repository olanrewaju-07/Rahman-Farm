import React from 'react';
import './Booking.css'
import { useNavigate } from 'react-router-dom';

const Booking = ({ products, setProducts }) => {
  const navigate = useNavigate();

  // Handler for updating product quantity
  const handleQuantityChange = (id, quantity) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, quantity } : product
      )
    );
  };

  // Calculate the total price for each product
  const calculateProductTotal = (price, quantity) => {
    return price * (quantity ? parseInt(quantity) : 0);
  };

  // Calculate the total price for all products
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + calculateProductTotal(product.price, product.quantity);
    }, 0);
  };

  return (
    <div className="productBooking">
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            marginBottom: "20px",
            border: "1px solid #212EA0",
            width: "300px",
            borderWidth: "5px",
          }}
        >
          <label>
            {product.name} (Price: {product.price}):
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              placeholder="Quantity"
              style={{
                marginLeft: "15px",
                width: "100px",
                border: "1px solid #000F38",
              }}
            />
          </label>
          <p>
            Total for {product.name}:{" "}
            #{calculateProductTotal(product.price, product.quantity)}{" "}
          </p>
        </div>
      ))}
      <h3>Total Price for all Products: #{calculateTotalPrice()} </h3>
      <button
        type="submit"
        className="btn dark-btn"
        onClick={() => navigate("/checkout")}
      >
        Go To CheckOut
      </button>
    </div>
  );
};

export default Booking;
