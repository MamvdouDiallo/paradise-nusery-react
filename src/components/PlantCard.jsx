import styles from './PlantCard.module.css';

export default function PlantCard({ plant, addToCart }) {
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
          className={styles.addToCart}
          onClick={() => addToCart(plant)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}