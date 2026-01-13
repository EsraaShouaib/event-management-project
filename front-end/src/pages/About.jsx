import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-2/5">
              <img 
                src="/images/about-main.jpg" 
                alt="About EventHub" 
                className="w-full h-96 md:h-full object-cover"
              />
            </div>
            <div className="md:w-3/5 p-8">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">About EventHub</h1>
              <p className="text-gray-700 leading-relaxed mb-4">
                EventHub is a comprehensive event management platform designed to connect people 
                through amazing events and create unforgettable experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our platform brings together event organizers and attendees in one seamless ecosystem, 
                making event discovery and management easier than ever before.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section - بيشتغل مع أي مقاس */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-8 text-blue-600 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg group-hover:border-blue-600 transition duration-300">
                  <img 
                    src="/images/team1.jpg" 
                    alt="Sarah Johnson - CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Passionate about creating memorable event experiences.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-lg group-hover:border-green-600 transition duration-300">
                  <img 
                    src="/images/team2.jpg" 
                    alt="Ahmed Mohammed - Event Manager" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Ahmed Mohammed</h3>
              <p className="text-green-600 font-medium mb-2">Event Manager</p>
              <p className="text-gray-600 text-sm">
                Expert in organizing successful events of all sizes.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg group-hover:border-purple-600 transition duration-300">
                  <img 
                    src="/images/team3.jpg" 
                    alt="Lina Hassan - Marketing Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Lina Hassan</h3>
              <p className="text-purple-600 font-medium mb-2">Marketing Director</p>
              <p className="text-gray-600 text-sm">
                Creative strategist for building event communities.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 shadow-lg group-hover:border-orange-600 transition duration-300">
                  <img 
                    src="/images/team4.jpg" 
                    alt="Mike Chen - Tech Lead" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Mike Chen</h3>
              <p className="text-orange-600 font-medium mb-2">Tech Lead</p>
              <p className="text-gray-600 text-sm">
                Ensures our platform runs with latest technology.
              </p>
            </div>

          </div>
        </div>

        {/* باقي المحتوى */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To create a world where everyone can easily discover, create, and participate in 
            meaningful events that bring people together and create lasting memories.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700 mb-2">Event Discovery</h3>
              <p className="text-gray-600">Find events based on your interests</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-700 mb-2">Easy Registration</h3>
              <p className="text-gray-600">Quick and secure registration process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;