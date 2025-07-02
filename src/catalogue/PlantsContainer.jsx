import PlantItem from "./PlantItem";
import "./catalogue.css";

export default function PlantsContainer({ plants, addItemToCart }) {
  return (
    <section className="PlantSection">
      <h2>Plants</h2>
      <div className="plantsCatalogue">
        {plants.map((plant) => {
          return <PlantItem plant={plant} addItemToCart={addItemToCart} key={plant.id} />;
        })}
      </div>
    </section>
  );
}
