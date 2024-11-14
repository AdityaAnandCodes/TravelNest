const TestimonialCard = ({ image, name, role, testimonial, rating }) => {
  // Function to render stars based on the rating value
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "yellow" : "gray"}
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path d="M12 17.3l6.5 4.3-5-7.7 5-7.7-6.5 4.3-6.5-4.3 5 7.7-5 7.7z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-w-[280px] w-full h-auto bg-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-all duration-500">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="w-24 h-24 rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-700">{role}</p>

      {/* Star Rating */}
      <div className="flex mt-2 mb-4">{renderStars()}</div>

      <p className="mt-4 text-sm text-gray-900">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;
