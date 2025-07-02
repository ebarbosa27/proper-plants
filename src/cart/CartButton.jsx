export default function CartButton({ cartItem, addItemToCart, removeItemFromCart }) {
  return (
    <div className="cartOptions">
      <button onClick={() => removeItemFromCart(cartItem.plant)}>-</button>
      <span>{cartItem.quantity}</span>
      <button onClick={() => addItemToCart(cartItem.plant)}>+</button>
    </div>
  );
}
