const Hero = () => {
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
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

      {/* Centered Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">Discover Your Next Adventure with Travel Nest</h1>
        <p className="text-xl mb-6 max-w-3xl text-gray-300">
          Whether you're seeking hidden gems or iconic destinations, Travel Nest curates the best travel experiences and accommodations just for you. Start exploring and make your journey unforgettable.
        </p>
        <button className="px-8 py-3 bg-rose-600 text-white hover:text-gray-100 rounded-lg hover:bg-rose-700 border-2 border-gray-100">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
