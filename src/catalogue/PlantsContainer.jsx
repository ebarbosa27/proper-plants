import PlantItem from "./PlantItem";
import "./catalogue.css";

export default function PlantsContainer({ plants }) {
  return (
    <section>
      <h2>Plants</h2>
      <div className="plantsCatalogue">
        {plants.map((plant) => {
          return <PlantItem name={plant.name} image={plant.image} key={plant.id} />;
        })}
      </div>
    </section>
  );
}
