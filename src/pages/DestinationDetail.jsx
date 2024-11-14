import React from "react";
import { useParams } from "react-router-dom";
import destinations from "../constants/index";

const DestinationDetail = () => {
  const { id } = useParams(); // Get the destination ID from the URL
  const destination = destinations.find((dest) => dest.id === id); // Find the destination based on ID

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="text-center text-white p-8 bg-black bg-opacity-60">
          <h1 className="text-4xl font-bold">{destination.name}</h1>
          <p className="text-xl mt-4">{destination.category}</p>
        </div>
      </div>

      {/* Detailed Info Section */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Details</h2>
        <p>{destination.description}</p> {/* Add more detailed info here */}
        <p className="mt-4">
          <strong>Price:</strong> {destination.price}
        </p>
        <p>
          <strong>Temperature:</strong> {destination.temperature}
        </p>
      </div>
    </div>
  );
};

export default DestinationDetail;
