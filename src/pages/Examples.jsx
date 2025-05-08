import React, { useState } from "react";
import { Link } from "react-router-dom";
import example1 from "../assets/imgs/example1.png";
import example2 from "../assets/imgs/example2.png";
import example3 from "../assets/imgs/example3.png";
import example4 from "../assets/imgs/example4.png";
import example5 from "../assets/imgs/example5.png";
import example6 from "../assets/imgs/example6.png";
import example7 from "../assets/imgs/example7.png";
import example8 from "../assets/imgs/example8.png";
import example9 from "../assets/imgs/example9.png";
import example10 from "../assets/imgs/example10.png";
import example11 from "../assets/imgs/example11.png";
import example12 from "../assets/imgs/example12.png";
import example13 from "../assets/imgs/example13.png";
import example14 from "../assets/imgs/example14.png";
import example15 from "../assets/imgs/example15.png";

const images = [
  example1,
  example2,
  example3,
  example4,
  example5,
  example6,
  example7,
  example8,
  example9,
  example10,
  example11,
  example12,
  example13,
  example14,
  example15,
];

const Examples = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

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

      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Examples of Our Work
        </h1>

        <div className="relative w-full">
          <img
            src={images[current]}
            alt={`Example ${current + 1}`}
            className="w-full h-96 object-cover rounded"
          />
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Example {current + 1} of {images.length}
        </p>
      </div>
    </div>
  );
};

export default Examples;
