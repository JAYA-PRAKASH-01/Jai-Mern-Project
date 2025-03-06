const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  street: String,
  city: String,
  state: String,
  pincode: String,
  country: String,
  phone: String,
});

const Ordermodel = mongoose.model("orders", orderSchema); // Changed "users" to "orders"
module.exports = Ordermodel;
