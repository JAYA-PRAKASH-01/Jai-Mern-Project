import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeCartItem, getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/order");
    window.scrollTo(0, 0);
  };

  return (
    <div className="cart" id="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />


        {Object.keys(cartItems).length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          Object.entries(cartItems).map(([itemId, item]) => (
            <div className="item" key={itemId}>
              <div className="cart-items-list" id="cart-items-items">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Rs. {item.price.toFixed(2)}</p>
                <p>{item.quantity}</p>
                <p>Rs. {item.total.toFixed(2)}</p>
                <p onClick={() => removeCartItem(itemId)} className="cross">x</p>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs. {getTotalAmount().toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs. 40.00</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p className="p">Total</p>
            <p>Rs. {(getTotalAmount() + 40).toFixed(2)}</p>
          </div>
          <hr />
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
