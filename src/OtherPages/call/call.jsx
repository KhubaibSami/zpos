import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import backgroundImg from '../../assets/background.jpg'; // Ensure you have a background image in the src folder

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-lg text-center my-12">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Contact Us</h1>
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4 text-blue-600">
            <FaPhone className="mr-2" /> +123 456 7890
          </div>
          <div className="flex items-center justify-center mb-4 text-blue-600">
            <FaEnvelope className="mr-2" /> info@example.com
          </div>
          <div className="flex items-center justify-center mb-4 text-blue-600">
            <FaMapMarkerAlt className="mr-2" /> 123 Street, City, Country
          </div>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
          <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-red-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
