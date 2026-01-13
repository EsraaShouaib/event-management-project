import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RegisterEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const events = {
    1: { title: "Tech Conference 2024", date: "2024-03-15", location: "Bekaa" },
    2: { title: "Music Festival", date: "2024-04-20", location: "Chtoura" },
    3: { title: "Business Workshop", date: "2024-05-10", location: "Zahle" },
    4: { title: "Art Exhibition", date: "2024-06-05", location: "Dubai" },
    5: { title: "Food Festival", date: "2024-07-12", location: "Damascus" },
  };

  const event = events[id] || { title: "Unknown Event", date: "TBD", location: "TBD" };

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    numberOfTickets: 1,
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', { eventId: id, ...formData });
    setIsSubmitted(true);
    
    setTimeout(() => {
      navigate('/events');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Registration Successful!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for registering for <strong>{event.title}</strong>.
            </p>
            <p className="text-gray-500">
              You will receive a confirmation email shortly. Redirecting to events page...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-2xl font-bold mb-2">Register for Event</h1>
            <div className="bg-blue-500 p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="mt-2">
                📅 {event.date} | 📍 {event.location}
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Ticket Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ticket Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Tickets *
                </label>
                <select
                  name="numberOfTickets"
                  value={formData.numberOfTickets}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Ticket' : 'Tickets'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests or Comments
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special requirements or comments..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center pt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterEvent;