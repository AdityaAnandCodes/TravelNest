const Footer = () => {
  return (
    <footer className="w-full py-8 border-t">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between">
        
        {/* Logo and Description */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-xl font-bold">TravelNest</h2>
          <p className="mt-2 max-w-xs">
            Explore the world with curated travel recommendations to suit every adventure and every traveler.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/destinations" className="hover:underline">Destinations</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@travelguru.com" className="hover:underline">info@travelnest.com</a></li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Travel Lane, Wanderlust City</li>
          </ul>
        </div>
        
        {/* Social Media Links */}
        <div className="mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="#" aria-label="Facebook" className="hover:underline">Facebook</a></li>
            <li><a href="#" aria-label="Instagram" className="hover:underline">Instagram</a></li>
            <li><a href="#" aria-label="Twitter" className="hover:underline">Twitter</a></li>
            <li><a href="#" aria-label="LinkedIn" className="hover:underline">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t mt-6 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} TravelGuru. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
