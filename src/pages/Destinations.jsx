<<<<<<< HEAD

=======
import React from "react";
>>>>>>> 916883156bee3ec7c61c6898421d82a5f764ddef
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import destinations from "../constants/index";

const Destinations = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Parallax Section */}
      <div className="relative">
        <div
          className="bg-fixed bg-cover bg-center min-h-screen"
          style={{ backgroundImage: "url('/bg_destinations.jpg')" }}
        >
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
            Explore Destinations
          </h1>
        </div>
        <div className="absolute bottom-5 left-3/9 transform -translate-x-1/2 animate-bounce px-10">
          <a href="#destinations">
            <svg
              width="56px"
              height="56px"
              viewBox="-2.88 -2.88 37.76 37.76"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              fill="#ff0000"
              stroke="#ff0000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>arrow-down-circle</title>
                <desc>Created with Sketch Beta.</desc>
                <g
                  id="Page-1"
                  stroke-width="0.00032"
                  fill="none"
                  fill-rule="evenodd"
                  sketch:type="MSPage"
                >
                  <g
                    id="Icon-Set-Filled"
                    sketch:type="MSLayerGroup"
                    transform="translate(-414.000000, -1089.000000)"
                    fill="#ffffff"
                  >
                    <path
                      d="M436.535,1105.88 L430.879,1111.54 C430.639,1111.78 430.311,1111.85 430,1111.79 C429.689,1111.85 429.361,1111.78 429.121,1111.54 L423.465,1105.88 C423.074,1105.49 423.074,1104.86 423.465,1104.46 C423.855,1104.07 424.488,1104.07 424.879,1104.46 L429,1108.59 L429,1098 C429,1097.45 429.448,1097 430,1097 C430.553,1097 431,1097.45 431,1098 L431,1108.59 L435.121,1104.46 C435.512,1104.07 436.146,1104.07 436.535,1104.46 C436.926,1104.86 436.926,1105.49 436.535,1105.88 L436.535,1105.88 Z M430,1089 C421.163,1089 414,1096.16 414,1105 C414,1113.84 421.163,1121 430,1121 C438.837,1121 446,1113.84 446,1105 C446,1096.16 438.837,1089 430,1089 L430,1089 Z"
                      id="arrow-down-circle"
                      sketch:type="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>

      {/* Destination Cards Section */}
      <div
        id="destinations"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 p-8"
      >
        {destinations.map((destination, index) => (
          <Link
<<<<<<< HEAD
  to={`/destinations/${destination.id}`} // Corrected line
  key={index}
  className="relative cursor-pointer"
>
  <DestinationCard
    image={destination.image}
    name={destination.name}
    category={destination.category}
    price={destination.price}
    temperature={destination.temperature}
  />
</Link>

=======
            to={`/destinations/${destination.id}`} // Corrected this line
            key={index}
            className="relative cursor-pointer"
          >
            <DestinationCard
              image={destination.image}
              name={destination.name}
              category={destination.category}
              price={destination.price}
              temperature={destination.temperature}
            />
          </Link>
>>>>>>> 916883156bee3ec7c61c6898421d82a5f764ddef
        ))}
      </div>
    </div>
  );
};

export default Destinations;