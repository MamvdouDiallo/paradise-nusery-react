
import { Link } from 'react-router-dom';
//import backgroundImage from '../../public/images/background.jpeg'; // Import the background image

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(/images/background.jpeg)`}}>
      <h1>Paradise Nursery</h1>
      <p>Découvrez des plantes d'intérieur pour embellir votre espace.</p>
      <Link to="/products" className="btn">Get Started</Link>
    </div>
  );
}