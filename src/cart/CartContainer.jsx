import CartItem from "./CartItem";
import "./cart.css";

export default function CartContainer({ cart, addItemToCart, removeItemFromCart }) {
  return (
    <section className="CartSection">
      <h2>Cart</h2>
      {cart.map((cartItem) => {
        return (
          <CartItem
            cartItem={cartItem}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
            key={cartItem.plant.id}
          />
        );
      })}
    </section>
  );
}
