import { features } from "../constants";



const Features = () => (
  <section className="py-16 bg-gray-100">
    <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            {feature.title}
          </h3>
          <p className="text-gray-600 text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
