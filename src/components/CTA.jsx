import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleStartBookingClick = () => {
    navigate('/authentication'); // Navigate to authentication page
  };

  const handleGetInspiredClick = () => {
    navigate('/destinations'); // Navigate to destinations page
  };

  return (
    <section className="bg-rose-600 py-16 text-white text-center ">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to Explore the World?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Discover unique destinations, amazing experiences, and unbeatable deals. Start planning your next adventure today!
        </p>
        <div className="flex justify-center gap-4">
          {/* Button 1: Start Booking */}
          <button
            onClick={handleStartBookingClick} // Add onClick handler for Start Booking
            className="bg-white text-rose-600 py-3 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Start Booking
          </button>
          {/* Button 2: Get Inspired */}
          <button
            onClick={handleGetInspiredClick} // Add onClick handler for Get Inspired
            className="bg-transparent border-2 border-white py-3 px-8 rounded-lg font-semibold text-lg text-white hover:bg-white hover:text-rose-600 transition-colors"
          >
            Get Inspired
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
