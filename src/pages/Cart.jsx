// import { Link } from 'react-router-dom';
// import CartItem from '../components/CartItem';

// export default function Cart({ cart, updateCart }) {
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Your Cart ({cart.length} items)</h2>
//       {cart.map((item) => (
//         <CartItem key={item.id} item={item} updateCart={updateCart} />
//       ))}
//       <p>Total: ${total.toFixed(2)}</p>
//       <Link to="/products" className="btn">Continue Shopping</Link>
//       <button className="btn-checkout">Checkout</button>
//     </div>
//   );
// }

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, updateCart, cartItemCount } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2>Your Cart ({cartItemCount} items)</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem 
              key={item.id} 
              item={item} 
              updateCart={updateCart}
            />
          ))}
          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
        </>
      )}
      
      <div className="cart-actions">
        <Link to="/products" className="btn">Continue Shopping</Link>
        {cart.length > 0 && (
          <button className="btn-checkout">Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
}