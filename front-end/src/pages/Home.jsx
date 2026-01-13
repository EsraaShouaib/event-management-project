import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section مع الصورة الكبيرة 1280x852 */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome to EventHub</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover amazing events and create unforgettable experiences
          </p>
          <Link 
            to="/events" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Explore Events
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Featured Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event 1 - 600x900 (طويلة) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/event-tech.jpg" 
              alt="Tech Conference" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Tech Conference</h3>
              <p className="text-gray-600">Latest trends in technology and innovation</p>
            </div>
          </div>

          {/* Event 2 - 640x427 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/event-music.jpg" 
              alt="Music Festival" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Music Festival</h3>
              <p className="text-gray-600">Amazing live performances and artists</p>
            </div>
          </div>

          {/* Event 3 - 640x427 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/images/event-business.jpg" 
              alt="Business Workshop" 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Business Workshop</h3>
              <p className="text-gray-600">Professional development and networking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;