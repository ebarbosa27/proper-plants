import { useState } from "react";
import PlantsContainer from "./catalogue/PlantsContainer";
import CartContainer from "./cart/CartContainer.jsx";
import { PLANTS } from "./data.js";
import "./app.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(plant) {
    let isNewItem = true;
    let newCart = [];

    if (cart.length > 0) {
      newCart = cart.map((cartItem) => {
        // test if new item and add if new
        // if not new then add 1 to quantity
        if (cartItem.plant.id === plant.id) {
          isNewItem = false;
          cartItem.quantity++;
        }
        return cartItem;
      });
    }

    if (isNewItem) {
      newCart.push({
        plant,
        quantity: 1,
      });
    }

    setCart(newCart);
  }

  function removeItemFromCart(plant) {
    const newCart = cart.filter((cartItem) => {
      if (cartItem.plant.id === plant.id) {
        cartItem.quantity--;
        if (cartItem.quantity === 0) {
          return;
        }
      }
      return cartItem;
    });
    setCart(newCart);
  }

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantsContainer plants={PLANTS} addItemToCart={addItemToCart} />
        <CartContainer
          cart={cart}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      </main>
    </>
  );
}
