import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              EventHub
            </Link>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your premier destination for discovering and managing amazing events. 
              Connect, explore, and create unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-300 hover:text-white transition duration-300 text-xl">
                📘
              </button>
              <button className="text-gray-300 hover:text-white transition duration-300 text-xl">
                🐦
              </button>
              <button className="text-gray-300 hover:text-white transition duration-300 text-xl">
                📷
              </button>
              <button className="text-gray-300 hover:text-white transition duration-300 text-xl">
                💼
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition duration-300">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Event Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Event Categories</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition duration-300 text-left">
                  Tech Conferences
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition duration-300 text-left">
                  Music Festivals
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition duration-300 text-left">
                  Business Workshops
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition duration-300 text-left">
                  Art Exhibitions
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition duration-300 text-left">
                  Food Festivals
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get updates on upcoming events and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                required
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button 
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 EventHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-300 hover:text-white text-sm transition duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-300 hover:text-white text-sm transition duration-300">
              Terms of Service
            </button>
            <button className="text-gray-300 hover:text-white text-sm transition duration-300">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;