
import './CartItem.css'; // Import direct du CSS

import { useCart } from '../contexts/CartContext';

export default function CartItem({ item }) {
  const { updateCart } = useCart();

  return (
    <div className="cartItem">
      <div className="itemImageContainer">
        <img 
          src={item.image} 
          alt={item.name} 
          className="itemImage"
        />
      </div>
      
      <div className="itemInfo">
        <h3 className="itemTitle">{item.name}</h3>
        <p className="itemPrice">${item.price.toFixed(2)}</p>
        <p className="itemSubtotal">
          Subtotal: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
      
      <div className="quantityControls">
        <button 
          className="quantityBtn decrease"
          onClick={() => updateCart(item, -1)}
          aria-label="Reduce quantity"
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <span className="quantityValue">{item.quantity}</span>
        <button 
          className="quantityBtn increase"
          onClick={() => updateCart(item, 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      
      <button 
        className="removeBtn"
        onClick={() => updateCart(item, 0)}
        aria-label="Remove item"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}