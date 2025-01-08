import React, { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems = {}, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img
          className="food-item-image"
          src={`${url}/images/${image}`}
          alt={name}
        />
      </div>
      <div className="food-item-info">
        <h3 className="food-item-title">{name}</h3>
        <p className="food-item-description">{description}</p>
        <div className="food-item-footer">
          <span className="food-item-price">${price}</span>
          {cartItems[id] ? (
            <div className="food-item-counter">
              <button className="counter-btn" onClick={() => removeFromCart(id)}>
                -
              </button>
              <span className="counter-value">{cartItems[id]}</span>
              <button className="counter-btn" onClick={() => addToCart(id)}>
                +
              </button>
            </div>
          ) : (
            <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
