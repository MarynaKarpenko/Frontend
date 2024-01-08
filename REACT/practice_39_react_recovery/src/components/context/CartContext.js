import React, { createContext, useState, useContext } from "react";

// Создаем контекст
const CartContext = createContext();

// Создаем провайдер контекста
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  // Метод для добавления товара в корзину
  const addToCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      updatedCart[productId] = (updatedCart[productId] || 0) + 1;
      return updatedCart;
    });
  };

  // Метод для удаления товара из корзины
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 1) {
        updatedCart[productId] -= 1;
      } else {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Создаем хук для удобного использования контекста
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};