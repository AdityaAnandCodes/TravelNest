import React from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../constants/index";

const Destinations = () => {
  return (
    <div
      className="p-8 min-h-screen bg-gray-100"
      style={{
        backgroundImage: "url(path-to-your-image.jpg)", // Replace with your background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Explore Destinations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            name={destination.name}
            category={destination.category}
            price={destination.price}
            temperature={destination.temperature}
          />
        ))}
      </div>
    </div>
  );
};

export default Destinations;
