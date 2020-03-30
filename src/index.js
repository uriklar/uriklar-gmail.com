import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 3) {
      alert("count equals 3!");
    }
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase count</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
