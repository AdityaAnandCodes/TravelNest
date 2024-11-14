import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 flex items-center justify-between p-5 transition-all ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Left Section: Logo and Destinations Link */}
      <div className="flex items-center gap-6">
        <div
          className="text-white text-3xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          TravelNest
        </div>
        <div
          className="hidden md:block text-white text-lg cursor-pointer"
          onClick={() => navigate("/destinations")}
        >
          Destinations
        </div>
      </div>

      {/* Right Section */}
      <div
        className="hidden md:block text-white text-lg cursor-pointer"
        onClick={() => navigate("/authentication")}
      >
        Sign In
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 p-5 md:hidden">
          <div
            className="text-white text-lg cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              navigate("/destinations");
            }}
          >
            Destinations
          </div>
          <div
            className="text-white text-lg cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            Things to do
          </div>
          <div
            className="text-white text-lg cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              navigate("/authentication");
            }}
          >
            Sign In
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
