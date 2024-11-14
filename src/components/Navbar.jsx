import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <section className="flex justify-between items-center min-w-full">
      <div className="flex justify-between items-center p-5 gap-6">
        <div
          className="montserrat-medium text-white text-3xl cursor-pointer"
          onClick={() => navigate("/")}
        >
          TravelNest
        </div>
        <div className="flex justify-between  gap-3">
          <div
            className="montserrat-medium text-white text-lg cursor-pointer "
            onClick={() => navigate("/destinations")}
          >
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
    </section>
  );
};

export default Navbar;
