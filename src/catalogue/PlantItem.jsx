export default function PlantItem({ plant, addItemToCart }) {
  return (
    <div className="plantItem">
      <p className="plantImage">{plant.image}</p>
      <p className="plantName">{plant.name}</p>
      <button
        onClick={() => {
          addItemToCart(plant);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
