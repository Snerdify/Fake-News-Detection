// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async () => {
    try {
      const response = await axios.post('http://localhost:5000/predict', { text });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error('Error predicting:', error);
    }
  };

  return (
    <div>
      <h1>Fake News Detection</h1>
      <div>
        <label>Text:</label>
        <textarea rows="4" onChange={(e) => setText(e.target.value)}></textarea>
      </div>
      <button onClick={handlePredict}>Predict</button>
      {prediction !== null && (
        <p>{prediction === 1 ? 'Fake News' : 'Not Fake News'}</p>
      )}
    </div>
  );
}

export default App;
