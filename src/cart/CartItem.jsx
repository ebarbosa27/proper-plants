import CartButton from "./CartButton";

export default function CartItem({ cartItem, addItemToCart, removeItemFromCart }) {
  return (
    <div className="cartItem">
      <p className="cartText">
        <span>{cartItem.plant.image}</span>
        {cartItem.plant.name}
      </p>
      <CartButton
        cartItem={cartItem}
        addItemToCart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
    </div>
  );
}
