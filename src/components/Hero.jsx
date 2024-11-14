const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-12 text-gray-950 ">
      {/* Left side: Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold">
          Discover Your Next Adventure
        </h1>
        <p className="text-lg lg:text-xl">
          From serene beaches to bustling cities, find the perfect destination and start planning your dream vacation today.
        </p>
        <button className="px-8 py-3 bg-rose-500 rounded-lg hover:bg-rose-600 transition">
          Explore Destinations
        </button>
      </div>

      {/* Right side: Video Content */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-10 mt-8 lg:mt-0">
        <div className="w-full h-64 lg:h-80 overflow-hidden shadow-lg rounded-lg">
          <video 
            className="w-full h-full object-fill"
            src="/INDIA - CINEMATIC FILM.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
