import React from "react";
import { Link } from "react-router-dom";
import example1 from "../assets/imgs/example1.png";
import example2 from "../assets/imgs/example2.png";
import example3 from "../assets/imgs/example3.png";

const examples = [
  {
    id: 1,
    image: example1,
    title: "Full Exterior Detail",
    description:
      "Deep wash, wax, and polish on this black SUV — showroom shine restored.",
  },
  {
    id: 2,
    image: example2,
    title: "Interior Deep Clean",
    description:
      "Complete interior shampoo and leather treatment for this luxury sedan.",
  },
  {
    id: 3,
    image: example3,
    title: "Headlight Restoration",
    description: "Foggy headlights brought back to clear, bright condition.",
  },
];

const Examples = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Nav links */}
      <nav className="mb-6 flex justify-center gap-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
          Home
        </Link>
        <Link
          to="/contact"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          About
        </Link>
      </nav>

      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Examples of Our Work
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Examples;
