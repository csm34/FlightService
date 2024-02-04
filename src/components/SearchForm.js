import React, { useState } from 'react';

const SearchForm = () => {
  const [departureAirport, setDepartureAirport] = useState('');
  const [arrivalAirport, setArrivalAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [oneWay, setOneWay] = useState(false);

  const handleSearch = async () => {
    try {
      // User information
      const departureAirport = document.getElementById('departureAirport').value;
      const arrivalAirport = document.getElementById('arrivalAirport').value;
      const departureDate = document.getElementById('departureDate').value;
      const returnDate = document.getElementById('returnDate').value;
  
      // API parameters
      const apiEndpoint = `https://example.com/api/flights?departure=${departureAirport}&arrival=${arrivalAirport}&departureDate=${departureDate}&returnDate=${returnDate}`;
  
      const response = await fetch(apiEndpoint);
  
      // Check response
      if (!response.ok) {
        throw new Error('Invalid response');
      }
  
      const data = await response.json();
  
      // Check if data is empty
      if (data.length === 0) {
        console.warn('Empty response received from the server.');
        // You can show a message to the user or perform other actions.
      } else {
        // If data is not empty, display search results
        displaySearchResults(data);
      }
    } catch (error) {
      console.error('There is a search error:', error.message);
    }
  };
  
  const displaySearchResults = (data) => {
    console.log('Search results:', data);
  };
  

  return (
    <div>
      <label>
        Airport of departure:
        <input
          type="text"
          value={departureAirport}
          onChange={(e) => setDepartureAirport(e.target.value)}
        />
      </label>
      <label>
        Airport of arrival:
        <input
          type="text"
          value={arrivalAirport}
          onChange={(e) => setArrivalAirport(e.target.value)}
        />
      </label>
      <label>
        Departure Date:
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </label>
      {!oneWay && (
        <label>
          Return Date:
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </label>
      )}
      <label>
        One Way Ticket:
        <input
          type="checkbox"
          checked={oneWay}
          onChange={() => setOneWay(!oneWay)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
