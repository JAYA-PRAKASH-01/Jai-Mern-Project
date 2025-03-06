import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";

function PlaceOrder() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [street, setstreet] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [country, setcountry] = useState("");
  const [phone, setphone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !fname ||
      !lname ||
      !email ||
      !street ||
      !city ||
      !state ||
      !pincode ||
      !country ||
      !phone
    ) {
      alert("Please fill in all the fields before placing the order.");
      return;
    }
    axios
      .post("http://localhost:3001/Order", {
        fname,
        lname,
        email,
        street,
        city,
        state,
        pincode,
        country,
        phone,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("Order Confirmed!");
  };

  const { getTotalAmount } = useContext(StoreContext);

  return (
    <div>
      <form className="placeorder" onSubmit={handleSubmit}>
        <div className="placeorder-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input
              type="text"
              placeholder="First Name"
              onChange={(e) => setfname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setlname(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Street"
            onChange={(e) => setstreet(e.target.value)}
          />
          <div className="multi-fields">
            <input
              type="text"
              placeholder="City"
              onChange={(e) => setcity(e.target.value)}
            />
            <input
              type="text"
              placeholder="State"
              onChange={(e) => setstate(e.target.value)}
            />
          </div>
          <div className="multi-fields">
            <input
              type="text"
              placeholder="Pin-Code"
              onChange={(e) => setpincode(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country"
              onChange={(e) => setcountry(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <div className="placeorder-right">
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalAmount()}</p>
              </div>
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{40}</p>
              </div>
              <div className="cart-total-details">
                <p>Total</p>
                <p>{getTotalAmount() + 40}</p>
              </div>
              <button type="submit">Place Order </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
