const Navbar = () => {
  return (
    <section className="flex justify-between items-center min-w-full">
      <div className="flex justify-between items-center p-5 gap-6">
        <div className="montserrat-medium text-rose-600 text-3xl cursor-pointer">
          TravelNest
        </div>
        <div className="flex justify-between  gap-3">
          <div className="montserrat-medium text-rose-600 text-lg cursor-pointer ">
            Destinations
          </div>
          <div className="montserrat-medium text-rose-600 text-lg cursor-pointer ">
            Things to do
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 gap-6">
        <div className="montserrat-medium text-rose-600 text-lg cursor-pointer ">
          {" "}
          Sign In
        </div>
      </div>
    </section>
  );
};

export default Navbar;
