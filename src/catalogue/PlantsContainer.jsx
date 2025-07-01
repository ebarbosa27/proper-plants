import PlantItem from "./PlantItem";
import "./catalogue.css";

export default function PlantsContainer({ plants }) {
  return (
    <section>
      {plants.map((plant) => {
        return <PlantItem name={plant.name} image={plant.image} key={plant.id} />;
      })}
    </section>
  );
}
