import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Nav links */}
      <nav className="mb-6 flex justify-center gap-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
          Home
        </Link>
        <Link
          to="/about"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          About
        </Link>
        <Link
          to="/examples"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Examples
        </Link>
      </nav>

      {/* Page content */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Bear’s Mobile Detailing
        </h1>
        <p className="text-center text-gray-600 mb-6">
          We’re here to make your vehicle shine! Reach out to us using the
          details below or send us a message.
        </p>
        {/* contact form... */}
      </div>
    </div>
  );
};

export default Contact;
