// import { useState } from 'react';
// import PlantCard from '../components/PlantCard';
// import { plants } from '../data'; // Tableau d'objets plantes (nom, prix, catégorie, image)

// export default function Products() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (plant) => {
//     setCart([...cart, plant]);
//   };

//   return (
//     <div className="products">
//       {plants.map((plant) => (
//         <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// }
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import PlantCard from '../components/PlantCard';
import { plants } from '../data';

export default function Products() {
  const { updateCart } = useContext(CartContext);

  return (
    <div className="products">
      {plants.map((plant) => (
        <PlantCard 
          key={plant.id} 
          plant={plant} 
          addToCart={() => updateCart(plant)}
        />
      ))}
    </div>
  );
}