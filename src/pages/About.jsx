import React from "react";
import { Link } from "react-router-dom";
import tonyImg from "../assets/imgs/tony.png"; // ✅ Make sure you have tony.png in /src/assets/imgs

const About = () => {
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

      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          About Bear’s Mobile Detailing
        </h1>
        <p className="text-center text-gray-600 mb-6">
          At Bear’s Mobile Detailing, we believe every vehicle deserves to look
          its best. Founded on a passion for automotive care and a commitment to
          convenience, we bring premium detailing services directly to your
          doorstep.
        </p>

        {/* Tony's image and bio */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={tonyImg}
            alt="Tony, Owner of Bear's Mobile Detailing"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">Meet Tony</h2>
          <p className="text-center text-gray-600">
            Tony is the heart and hands behind Bear’s Mobile Detailing. With
            years of experience, a passion for perfection, and a commitment to
            customer satisfaction, Tony ensures every vehicle he touches looks
            its absolute best. When you book with Bear’s, you’re getting Tony’s
            personal guarantee of quality.
          </p>
        </div>

        <div className="space-y-4 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold mb-1">Our Mission</h2>
            <p>
              To provide top-quality mobile detailing services that exceed
              customer expectations and leave every vehicle shining, inside and
              out.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1">Why Choose Us?</h2>
            <ul className="list-disc list-inside">
              <li>Convenient mobile service — we come to you</li>
              <li>Experienced and passionate team</li>
              <li>Eco-friendly products and techniques</li>
              <li>Attention to detail and customer satisfaction</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-1">Our Story</h2>
            <p>
              Bear’s Mobile Detailing started with one truck, a few tools, and a
              vision: to deliver professional-grade detailing without the hassle
              of going to a shop. Today, we serve dozens of happy customers
              every week, and we’re just getting started!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
