import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex justify-between items-center p-5 bg-transparent bg-opacity-0">
      <div className="flex items-center gap-6">
        <div
          className="text-white text-3xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          TravelNest
        </div>
        <div className="flex gap-6">
          <div
            className="text-white text-lg cursor-pointer"
            onClick={() => navigate("/destinations")}
          >
            Destinations
          </div>
          <div className="text-white text-lg cursor-pointer">Things to do</div>
        </div>
      </div>
      <div className="text-white text-lg cursor-pointer">Sign In</div>
    </nav>
  );
};

export default Navbar;
