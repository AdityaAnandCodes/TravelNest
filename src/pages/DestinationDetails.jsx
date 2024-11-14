
import { useParams } from "react-router-dom";
import destinations from "../constants/index"; // Ensure you have the destinations data here

const DestinationDetail = () => {
  const { id } = useParams(); // Get the destination ID from the URL
  const destination = destinations.find((dest) => dest.id === id); // Find the destination based on ID

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className=" min-h-screen">
      {/* Parallax Background Image Section */}
      <div
        className="relative bg-fixed bg-cover bg-center h-screen" // Adjusted height for the background section
        style={{ backgroundImage: `url(${destination.image})` }} // Fixed background image URL interpolation
      >
        {/* Text Overlay */}
        <div className="flex justify-center items-end w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-white p-12 " >
            <h1 className="text-5xl font-extrabold">{destination.name}</h1>
            <p className="text-2xl mt-4">{destination.category}</p>
          </div>
        </div>
      </div>

      {/* Detailed Info Section with Background Image Behind */}
      <div
        className="p-8 md:p-16 bg-style"
  
      >
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 relative z-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Details</h2>
          <p className="text-lg text-gray-700">{destination.description}</p>

          {/* Price and Temperature */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-800">
              <strong>Price:</strong> {destination.price}
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2">
              <strong>Temperature:</strong> {destination.temperature}
            </p>
            <p className="text-lg font-semibold text-gray-800 mt-2">
              <strong>Best Time to Visit:</strong> {destination.bestTimeToVisit}
            </p>
          </div>

          {/* Activities */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Activities</h3>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              {destination.activities.map((activity, index) => (
                <li key={index} className="text-lg">
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          {/* Nearby Attractions */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">
              Nearby Attractions
            </h3>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              {destination.nearbyAttractions.map((attraction, index) => (
                <li key={index} className="text-lg">
                  {attraction}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
