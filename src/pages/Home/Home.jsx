import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
function Home() {
  const [category, setcategory] = useState("All");
  return (
    <div className="body">
      <Header />
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
