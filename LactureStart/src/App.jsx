import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BtnComponent from "./BtnComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>react button ⤵️</h1>
      <div>
        <button>count is {count}</button>
        <BtnComponent />
        <BtnComponent></BtnComponent>
      </div>
    </>
  );
}

export default App;
