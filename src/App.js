import "./styles.css";
import { useState } from "react";
import Counter from "./components/counter";
import TodoApp from "./components/TodoApp";

function App() {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("")
  return (
    <div className="App">
     
      {toggle ? null : <TodoApp />}

      <button onClick={() => setToggle(!toggle)}  onClick={()=> setValue(value)}>
        {toggle ? "show Todo" : "Show deleted Todo"}
      </button>
    </div>
  );
}
export default App;
