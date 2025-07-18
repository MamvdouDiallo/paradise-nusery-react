export default function CartItem({ item, updateCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <button onClick={() => updateCart(item.id, -1)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => updateCart(item.id, 1)}>+</button>
      <button onClick={() => updateCart(item.id, 0)}>🗑️</button>
    </div>
  );
}