import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleStartJourneyClick = () => {
    navigate('/destinations'); // Navigate to the destinations page
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="india_vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="absolute bottom-5 left-0 transform -translate-x-1/2 animate-bounce px-10">
          <a href="#testimonials">
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

      {/* Centered Overlay Content */}
      <div className="relative z-10 flex flex-col max-sm:pt-20 items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4 max-sm:text3xl">
          Discover Your Next Adventure with <span className='text-rose-500'>TravelNest</span>
        </h1>
        <p className="text-xl mb-6 max-w-3xl max-sm:text-lg text-gray-300">
          Whether you are seeking hidden gems or iconic destinations, TravelNest curates the best travel experiences and accommodations just for you. Start exploring and make your journey unforgettable.
        </p>
        <button
          onClick={handleStartJourneyClick} // Add onClick handler for Start Your Journey
          className="px-8 py-3 font-bold bg-transparent hover:bg-black hover:bg-opacity-50 text-white hover:text-gray-100 rounded-lg border-2 border-gray-100 transition-all"
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
