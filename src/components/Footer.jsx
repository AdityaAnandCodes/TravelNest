// Footer.jsx
import { Link } from "react-router-dom"; // Import Link for routing

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0">
        
        {/* Logo and Description */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-3xl font-extrabold text-rose-600">TravelNest</h2>
          <p className="mt-3 max-w-xs text-gray-400">
            Explore the world with curated travel recommendations to suit every adventure and every traveler.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/destinations" className="hover:text-rose-600 transition-colors">Destinations</Link></li>
            <li><Link to="/error404" className="hover:text-rose-600 transition-colors">About Us</Link></li>
            <li><Link to="/error404" className="hover:text-rose-600 transition-colors">Blog</Link></li>
            <li><Link to="/error404" className="hover:text-rose-600 transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Contact Us</h3>
          <ul className="space-y-3">
            <li>Email: <a href="mailto:info@travelnest.com" className="hover:text-rose-600 transition-colors">info@travelnest.com</a></li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Travel Lane, Wanderlust City</li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-4 text-gray-300">Follow Us</h3>
          <ul className="flex space-x-6">
            <li><Link to="/error404" aria-label="Facebook" className="hover:text-rose-600 transition-colors">Facebook</Link></li>
            <li><Link to="/error404" aria-label="Instagram" className="hover:text-rose-600 transition-colors">Instagram</Link></li>
            <li><Link to="/error404" aria-label="Twitter" className="hover:text-rose-600 transition-colors">Twitter</Link></li>
            <li><Link to="/error404" aria-label="LinkedIn" className="hover:text-rose-600 transition-colors">LinkedIn</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t mt-12 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} TravelNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
