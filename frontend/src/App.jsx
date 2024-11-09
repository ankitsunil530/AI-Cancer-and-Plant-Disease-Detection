import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const url = type === 'cancer' ? '/predict_cancer' : '/predict_plant';

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="App">
      <h1>AI Cancer and Plant Disease Detection</h1>

      <form onSubmit={(e) => handleSubmit(e, 'cancer')}>
        <h2>Cancer Detection</h2>
        <input type="file" name="file" required />
        <button type="submit">Detect Cancer</button>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'plant')}>
        <h2>Plant Disease Detection</h2>
        <input type="file" name="file" required />
        <button type="submit">Detect Plant Disease</button>
      </form>

      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default App;
