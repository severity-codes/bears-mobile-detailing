import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/imgs/hero.png";

const Home = () => {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col items-center px-4 py-8">
      {/* Hero Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col sm:flex-row overflow-hidden">
        <div className="sm:w-1/3 w-full">
          <img
            src={heroImg}
            alt="Bears Mobile Detailing"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col justify-center text-left">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Bear’s Mobile Detailing
          </h1>
          <p className="text-gray-600">
            Professional mobile detailing services — we come to you! Serving
            cars, trucks, and more with top-tier care.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <nav className="mt-8 w-full max-w-4xl flex flex-wrap justify-center gap-4">
        <Link
          to="/contact"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          About
        </Link>
        <Link
          to="/examples"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          
          Examples of Work
        </Link>
      </nav>
    </div>
  );
};

export default Home;
