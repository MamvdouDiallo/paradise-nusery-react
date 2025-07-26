
import { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const updateCart = (item, delta = 1) => {
    setCart(prevCart => {
      // Suppression de l'article si delta = 0
      if (delta === 0) {
        return prevCart.filter(cartItem => cartItem.id !== item.id);
      }

      // Recherche de l'article existant
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      
      // Si l'article n'existe pas dans le panier
      if (existingItemIndex === -1) {
        // On l'ajoute seulement si on incrémente (delta > 0)
        return delta > 0 
          ? [...prevCart, { ...item, quantity: 1 }]
          : prevCart;
      }

      // Mise à jour de la quantité pour l'article existant
      const updatedCart = [...prevCart];
      const updatedItem = { ...updatedCart[existingItemIndex] };
      updatedItem.quantity += delta;

      // Suppression si la quantité devient <= 0
      if (updatedItem.quantity <= 0) {
        return updatedCart.filter(cartItem => cartItem.id !== item.id);
      }

      // Mise à jour de l'article dans le panier
      updatedCart[existingItemIndex] = updatedItem;
      return updatedCart;
    });
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  ).toFixed(2);

  return (
    <CartContext.Provider 
      value={{ 
        cart,
        updateCart,
        cartItemCount,
        totalPrice,
        clearCart: () => setCart([])
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personnalisé pour utiliser le contexte
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}