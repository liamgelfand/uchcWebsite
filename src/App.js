import React, { useState } from 'react';

const App = () => {
  const [apiResponse, setApiResponse] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://i2vaeyqv5f.execute-api.us-east-1.amazonaws.com/dev/graph');
      const text = await response.text(); // Get the raw text of the response
      console.log('Raw Response:', text);
  
      const data = await response.json(); // Try to parse as JSON
      setApiResponse(data.body);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>API Response:</h1>
      <p>{apiResponse}</p>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default App;

