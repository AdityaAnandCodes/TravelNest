const DestinationCard = ({ image, name, category, price, temperature }) => {
  return (
    <div className="min-w-96 h-auto bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <img
        src={image}
        alt={`${name}`}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p className="text-xs font-medium text-gray-600 mb-1">{category}</p>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex items-center">
          {parseFloat(temperature) > 25 ? (
            <svg
              className="w-5 h-5 text-yellow-500 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2v2m6.364 1.636l-1.414 1.414m4.95 4.95h-2m-1.636 6.364l-1.414-1.414m-4.95 4.95v-2m-6.364-1.636l1.414-1.414M4.222 8.222l1.414 1.414M2 12h2m0 0v2m2-2v-2"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-blue-500 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8a4 4 0 00-4 4h0a4 4 0 008 0h0a4 4 0 00-4-4zm-2 4h4m2 0h-2m-4 0H8m6 0v6m-4-6v6"
              />
            </svg>
          )}
          <span className="text-gray-700 text-sm">{temperature}</span>
        </div>
        <span className="text-gray-700 font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default DestinationCard;
