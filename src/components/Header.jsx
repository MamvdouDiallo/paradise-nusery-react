import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Header() {
  const { cartItemCount } = useContext(CartContext);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          <FaShoppingCart />
          {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </nav>
    </header>
  );
}