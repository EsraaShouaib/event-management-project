import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">Event Details #{id}</h1>
          <p className="text-gray-600 mb-4">This is the detailed view for event {id}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Event Information</h2>
            <p>More details about the event will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;