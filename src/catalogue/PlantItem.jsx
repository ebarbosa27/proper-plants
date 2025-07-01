export default function PlantItem({ name, image }) {
  return (
    <div className="plantItem">
      <p className="plantImage">{image}</p>
      <p className="plantName">{name}</p>
      <button>Add to cart</button>
    </div>
  );
}
