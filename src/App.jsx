import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Cart from "./pages/cart/cart";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/placeorder/placeorder";
import Footer from "./components/Footer/Footer";
import LoginPop from "./components/LoginPop/LoginPop";
import Celebratie from "./pages/Celebratie/Celebratie";

const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <>
      {showlogin ? <LoginPop setshowlogin={setshowlogin} /> : <></>}
      <div className="app">
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/celebratie" element={<Celebratie />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
