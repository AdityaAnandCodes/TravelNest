import { useParams } from "react-router-dom";
import destinations from "../constants/index";

const DestinationDetails = () => {
  const { id } = useParams(); // Get the id from the URL
  const destination = destinations.find((dest) => dest.id === parseInt(id)); // Find the destination by id

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="destination-details">
      <h1>{destination.name}</h1>
      <img src={destination.image} alt={destination.name} />
      <p>{destination.category}</p>
      <p>Price: {destination.price}</p>
      <p>Temperature: {destination.temperature}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default DestinationDetails;
