import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  const [events, setEvents] = useState([]);

  const defaultEvents = [
    { id: 1, title: "Tech Conference 2024", description: "Latest trends in technology", date: "2024-03-15", location: "Beirut" },
    { id: 2, title: "Music Festival", description: "Live performances", date: "2024-04-20", location: "Chtoura" },
    { id: 3, title: "Business Workshop", description: "Professional development", date: "2024-05-10", location: "Online" }
  ];

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setEvents(data);
        } else {
          setEvents(defaultEvents); 
        }
      })
      .catch(() => {
        setEvents(defaultEvents); 
      });
  }, );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-2">{event.description}</p>
              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>

              <Link
                to={`/register/${event.id}`}
                className="block mt-4 bg-blue-600 text-white text-center py-2 rounded"
              >
                Register
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
