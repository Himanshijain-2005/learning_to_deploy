import React, { useState } from 'react';
import './App.css';

const quotes = [
  "Stay focused, stay fearless. 💪",
  "Discipline is the bridge between goals and accomplishment.",
  "Dream big. Work harder.",
  "Don't stop when you're tired. Stop when you're done. 🚀",
  "One day, all the hard work will pay off. Keep going! 🙏"
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const handleClick = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };

  return (
    <div className="App">
      <h1>🧘 Motivational Quote Generator</h1>
      <p className="quote">{quote}</p>
      <button onClick={handleClick}>Inspire Me 💡</button>
    </div>
  );
}

export default App;
