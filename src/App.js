import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setToggel] = useState(true);

  return (
    <div className={flag ? "white" : "dark"}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setToggel(!flag)}>Toggel</button>
    </div>
  );
}

export default App;
