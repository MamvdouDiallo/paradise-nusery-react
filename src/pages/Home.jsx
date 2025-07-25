
import { Link } from 'react-router-dom';

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.sectionsWrapper}>
        <div className={styles.section}>
          <h1>Welcome to Paradise Nursery</h1>
          <p>Where green meets serenity</p>
          <Link to="/products" className={styles.btn}>Get Started</Link>
        </div>

        <div className={styles.section}>
          <h2>Welcome to Paradise Nursery, where green meets serenity</h2>
          <p>Step into an urban oasis where lush foliage and tranquil beauty intertwine to create your personal sanctuary. Every plant in our nursery is lovingly cultivated by expert hands, selected not just for its beauty but for its ability to transform spaces and uplift souls. Whether you're seeking a statement fiddle-leaf fig to anchor your living room, a cascade of pothos to soften your workspace, or aromatic herbs to awaken your kitchen, we have the perfect green companion waiting for you.</p>
          <p>At Paradise Nursery, we go beyond selling plants - we cultivate connections. Our team of passionate horticulturists will guide you in selecting plants that thrive in your unique environment, sharing expert care tips to help your new leafy friends flourish. We practice sustainable growing methods, with all our plants nurtured organically to ensure they're as kind to the earth as they are beautiful in your home.</p>
          <p>Let us help you create living art that grows more beautiful with time. Because in our fast-paced world, everyone deserves a peaceful corner where nature whispers and leaves dance. Your personal paradise starts here</p>
        </div>
      </div>
    </div>
  );
}