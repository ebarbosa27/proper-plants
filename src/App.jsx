import { useState } from "react";
import PlantsContainer from "./catalogue/PlantsContainer";
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

  // function removeItemFromCart(item) {}

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantsContainer plants={PLANTS} addItemToCart={addItemToCart} />
      </main>
    </>
  );
}
