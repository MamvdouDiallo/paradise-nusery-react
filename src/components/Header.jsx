import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import styles from './Header.module.css';

export default function Header() {
  const { cartItemCount } = useContext(CartContext);

  return (
    <header className={styles.header}>
<div className={styles.logoContainer}>
  <img 
    src="/images/nursery.png" 
    alt="Paradise Nursery Logo" 
    className={styles.logo}
  />
  <div className={styles.titleContainer}>
    <h1>Paradise Nursery</h1>
    <p>Where green meets serenity</p>
  </div>
</div>
      <div className={styles.pageTitle}>Products</div> {/* Ce titre peut être dynamique */}
      <nav className={styles.navLinks}>
        <Link to="/cart" className={styles.cartLink}>
          <FaShoppingCart />
          {cartItemCount > 0 && <span className={styles.cartCount}>{cartItemCount}</span>}
        </Link>
      </nav>
    </header>
  );
}