import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
  const { cart, updateCart, cartItemCount } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cartContainer">
      <h2 className="cartTitle">Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="cartEmpty">
          <p>Your cart is currently empty</p>
          <Link to="/products" className="btnContinue">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="cartGrid">
          <div className="cartItems">
            {cart.map((item) => (
              <CartItem 
                key={item.id} 
                item={item} 
                updateCart={updateCart}
              />
            ))}
          </div>
          
          <div className="cartSummary">
            <div className="cartTotal">
              <span>Order Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="cartTaxNote">Shipping & taxes calculated at checkout</p>
            
            <div className="cartActions">
              <Link to="/products" className="btnContinue">
                Continue Shopping
              </Link>
              <button className="btnCheckout">
                Secure Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}