import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <button className="plus" onClick={increment}>
          +
        </button>
        <h2>count:{count}</h2>
        <button className="minus" onClick={decrement}>
          -
        </button>
      </div>
    </>
  );
}

export default App;
