// import { useState } from "react";
import PlantsContainer from "./catalogue/PlantsContainer";
import { PLANTS } from "./data.js";
import "./app.css";

export default function App() {
  // const [cart, setCart] = useState({});

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantsContainer plants={PLANTS} />
      </main>
    </>
  );
}
