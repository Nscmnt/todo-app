import { useState } from "react";
import Todo from "./components/Todo";

import "./App.css";

function App() {
  const [light, setLight] = useState(false);

  return (
    <div className={`App ${light && "light"}`}>
      <Todo light={light} setLight={setLight} />
    </div>
  );
}

export default App;
