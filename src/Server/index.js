const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Usermodel = require("./models/users");
const Ordermodel = require("./models/placeorderschema");
const CartModel = require("./models/cartschema");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/jk_hunger_hub")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Usermodel.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        res.json({ status: "Success", uname: user.uname, email: user.email });
      } else {
        res.json({ status: "Error", message: "Incorrect password" });
      }
    } else {
      res.json({ status: "Error", message: "No record exists" });
    }
  } catch (err) {
    res.json({ status: "Error", message: err.message });
  }
});

// Authentication Route (Sign Up)
app.post("/Authentification", async (req, res) => {
  const { uname, email, password } = req.body;
  try {
    const existingUser = await Usermodel.findOne({ email: email });
    if (existingUser) {
      res.json({ status: "Error", message: "Email already exists" });
    } else {
      // Create new user and return the user's data
      const newUser = await Usermodel.create({ uname: uname, email, password });
      res.json({ 
        status: "Success", 
        message: "Registration successful!", 
        uname: newUser.uname, // Return the 'uname' along with other data
        email: newUser.email  
      });
    }
  } catch (err) {
    res.json({ status: "Error", message: err.message });
  }
});



app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 