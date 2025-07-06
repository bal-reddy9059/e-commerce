

// src/Context/ShopContext.jsx
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {
  const cart = {};
  for (let i = 1; i <= all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const navigate = useNavigate();

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const updateCartItem = (itemId, newQuantity) => {
    const qty = Math.max(newQuantity, 0);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: qty,
    }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];
      if (quantity > 0) {
        const product = all_product.find((p) => p.id === Number(itemId));
        if (product) {
          total += product.new_price * quantity;
        }
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };

  const contextValue = {
    cartItems,
    all_product,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    navigate,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
