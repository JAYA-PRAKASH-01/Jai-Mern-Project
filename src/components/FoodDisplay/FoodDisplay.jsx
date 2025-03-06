import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list, addToCart } = useContext(StoreContext);
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");


  const handleFoodClick = (item) => {
    setSelectedFood(item);
    setQuantity(1);
  };

 
  const handleAddToCart = () => {
    if (selectedFood) {
      addToCart(selectedFood._id, quantity);
      
      alert(`${selectedFood.name} added to cart!`);
      setSelectedFood(null); 
      
     
    }
  };
  

  return (
    <div className="food-display" id="food-display">
      <h2>Food Menu ...!! Visit Now...</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <div
                key={item._id}
                className="food-item"
                onClick={() => handleFoodClick(item)}
              >
                <img src={item.image} alt={item.name} className="food-image" />
                <p>{item.name}</p>
              </div>
            );
          }
          return null;
        })}
      </div>

    
      {selectedFood && (
        <div className="food-item-popup">
          <div className="popup-content">
            <span className="close-btn" onClick={() => setSelectedFood(null)}>
              &times;
            </span>
            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="popup-image"
            />
            <h2>{selectedFood.name}</h2>
            <p>{selectedFood.description}</p>
            <p>Price: Rs.{selectedFood.price}</p>

            <div className="quantity-control">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button
                className="minus"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}

    
      {cartMessage && <div className="cart-message">{cartMessage}</div>}
    </div>
  );
};

export default FoodDisplay;
