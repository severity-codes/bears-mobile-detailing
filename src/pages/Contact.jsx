import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        "default_service",
        "template_ilz5wtb",
        form.current,
        "of7VCVRiHniQlfrYX" 
      )
      .then(
        () => {
          setButtonText("Send Message");
          alert("Email sent successfully!");
          form.current.reset();
        },
        (err) => {
          setButtonText("Send Message");
          alert("Failed to send email. Please try again.");
          console.error(err);
        }
      );
  };

  return (
    <div className="flex flex-col items-center px-4 py-8">
      {/* Navigation links */}
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

      {/* Contact box */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Contact Bear’s Mobile Detailing
        </h1>

        {/* Phone and email at the top */}
        <div className="space-y-2 text-center mb-6">
          <div>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+13524091040"
              className="text-blue-600 hover:text-blue-800"
            >
              +1 (352) 409-1040
            </a>
          </div>
          <div>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:tonybush19@outlook.com"
              className="text-blue-600 hover:text-blue-800"
            >
              tonybush19@outlook.com
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
