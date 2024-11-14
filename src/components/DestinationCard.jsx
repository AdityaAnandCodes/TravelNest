const DestinationCard = ({ image, name, category, price, temperature }) => {
  return (
    <div className="h-auto bg-white rounded-xl shadow-md p-4 flex flex-col items-start hover:scale-105">
      <img
        src={image}
        alt={`${name}`}
        className="w-full h-64 object-cover rounded-lg mb-2"
      />
      <p className="text-xs font-medium text-gray-600">{category}</p>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="flex items-center justify-start w-full mt-2">
        {parseFloat(temperature) > 25 ? (
          <svg
            className="h-6 w-6 text-orange-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" r="4" />
            <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5 text-cyan-500"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(60 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(120 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(180 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(240 12 12)"
            />
            <path
              d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
              transform="rotate(300 12 12)"
            />
          </svg>
        )}
        <span className="text-gray-700 text-sm">{temperature}</span>
      </div>
    </div>
  );
};

export default DestinationCard;
