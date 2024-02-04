import React, { useState } from 'react';

const FlightList = ({ flights, loading }) => {
  const [sortOption, setSortOption] = useState('departureTime');

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedFlights = [...flights].sort((a, b) => {
    if (sortOption === 'departureTime') {
      return a.departureTime.localeCompare(b.departureTime);
    } else if (sortOption === 'arrivalTime') {
      return a.arrivalTime.localeCompare(b.arrivalTime);
    } else if (sortOption === 'duration') {
      return a.duration - b.duration;
    } else if (sortOption === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div>
      <h2>Flying List</h2>
      <label>
        Sort:
        <select value={sortOption} onChange={handleSortChange}>
          <option value="departureTime">Departure Time</option>
          <option value="arrivalTime">Arrival Date</option>
          <option value="duration">Duration</option>
          <option value="price">Price</option>
        </select>
      </label>

      {loading && <p>loading...</p>}

      <ul>
        {sortedFlights.map((flight) => (
          <li key={flight.id}>
            {flight.departureTime} - {flight.arrivalTime} | {flight.duration} | ${flight.price}
            <p>Airline: {flight.airline}</p>
            <p>City: {flight.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
