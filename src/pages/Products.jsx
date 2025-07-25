import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import PlantCard from '../components/PlantCard';
import { plants } from '../data';


import styles from './Products.module.css'; 
export default function Products() {
  const { updateCart } = useContext(CartContext);

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.sectionTitle}>Air Purifying Plants</h2>
      <div className={styles.productsGrid}>
        {plants.map((plant) => (
          <PlantCard 
            key={plant.id} 
            plant={plant} 
            addToCart={() => updateCart(plant)}
          />
        ))}
      </div>
    </div>
  );
}