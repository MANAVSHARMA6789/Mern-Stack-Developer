// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-app">
      <h1>React Counter App</h1>
      <div className="counter-display">
        <span className={count > 0 ? 'positive' : count < 0 ? 'negative' : ''}>
          {count}
        </span>
      </div>
      <div className="buttons">
        <button onClick={decrement} className="decrement">Decrement (-)</button>
        <button onClick={reset} className="reset">Reset</button>
        <button onClick={increment} className="increment">Increment (+)</button>
      </div>
    </div>
  );
}

export default App;
