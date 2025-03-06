import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({ category, setcategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Your Favourite Dish with Us</h1>
      <p className="explore-menu-text">
        Explore a world of flavors with our food ordering app! From sizzling
        starters to indulgent desserts, our curated menu has something for
        everyone. Choose from fresh salads, hearty mains, and international
        cuisines, all crafted to perfection. Craving comfort food or trying
        something new? Dive into our mouthwatering selection now!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
