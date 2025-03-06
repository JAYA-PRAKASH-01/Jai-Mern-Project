import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : {};
    } catch (error) {
      console.error("Error loading cart from localStorage", error);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart to localStorage", error);
    }
  }, [cartItems]);


  const addToCart = (itemId, quantity = 1) => {
    setCartItems((prev) => {
      const item = food_list?.find((food) => food._id === itemId);
      if (!item) {
        console.warn("Item not found in food list:", itemId);
        return prev;
      }

      const existingItem = prev[itemId] || { ...item, quantity: 0, total: 0 };

      return {
        ...prev,
        [itemId]: {
          ...existingItem,
          quantity: existingItem.quantity + quantity,
          total: (existingItem.quantity + quantity) * item.price,
        },
      };
    });
  };

  const removeCartItem = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (!updatedCart[itemId]) return prev;

      if (updatedCart[itemId].quantity > 1) {
        updatedCart[itemId].quantity -= 1;
        updatedCart[itemId].total = updatedCart[itemId].quantity * updatedCart[itemId].price;
      } else {
        delete updatedCart[itemId];
      }
      return updatedCart;
    });
  };

  const getTotalAmount = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + item.total, 0);
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeCartItem,
    getTotalAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;




















