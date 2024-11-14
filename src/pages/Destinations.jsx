import React from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../constants/index";

const Destinations = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative">
        <img
          src="/bg_destinations.jpg"
          alt="Destinations Background"
          className="min-w-full  object-cover"
        />
        {/* Overlay Text */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
          Explore Destinations
        </h1>
      </div>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 p-8">
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
