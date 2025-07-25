import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const updateCart = (plant, delta = 1) => {
    setCart(prevCart => {
      // Si delta = 0, supprime l'item
      if (delta === 0) return prevCart.filter(item => item.id !== plant.id);
      
      // Vérifie si l'item existe déjà
      const existingItem = prevCart.find(item => item.id === plant.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === plant.id 
            ? { ...item, quantity: item.quantity + delta } 
            : item
        ).filter(item => item.quantity > 0);
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, updateCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
}