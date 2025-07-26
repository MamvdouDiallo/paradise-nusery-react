import styles from './PlantCard.module.css';

import { useState } from 'react';

export default function PlantCard({ plant, addToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(plant);
    setIsAdded(true); // Désactive le bouton après clic
  };

  return (
    <div className={styles.plantCard}>
      {!plant.inStock && (
        <span className={styles.soldOutBadge}>Sale</span>
      )}      
      <img 
        src={plant.image} 
        alt={plant.name} 
        className={styles.plantImage}
      />
      
      <div className={styles.plantInfo}>
        <h3 className={styles.plantName}>{plant.name}</h3>
        <p className={styles.plantPrice}>${plant.price.toFixed(2)}</p>
        <button 
          className={`${styles.addToCart} ${isAdded ? styles.disabled : ''}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}