import React, {useState} from 'react'
import "./counter.css"

const Counter = () => {
    const [count, setcount] = useState(0);
  return (
    <div className="counter">
        <h1>Count: {count}</h1>
      <button onClick={() => setcount(count + 1)} className="increment">
        Increment
      </button>
      <button onClick={() => setcount(count - 1)} className="decrement">Decrement</button>
      <button onClick={() => setcount(0)} className="reset">Reset</button>
    </div>
  );
}

export default Counter
