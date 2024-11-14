const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center   p-5">
      <div className="flex items-center gap-6">
        <div className="montserrat-medium text-white text-3xl cursor-pointer">
          TravelNest
        </div>
        <div className="flex gap-3">
          <div className="montserrat-medium text-white text-lg cursor-pointer">
            Destinations
          </div>
          <div className="montserrat-medium text-white text-lg cursor-pointer">
            Things to do
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="montserrat-medium text-white text-lg cursor-pointer">
          Sign In
        </div>
      </div>
    </nav>
  );
};

export default Navbar;