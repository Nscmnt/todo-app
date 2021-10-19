import React from "react";
import "./Todo.css";
import toggleImageDark from "../assets/icon-sun.svg";
import toggleImageLight from "../assets/icon-moon.svg";
import Input from "./Input";
import Tasks from "./Tasks";
import useLocalStorage from "../hooks/useLocalStorage";

const Todo = ({ light, setLight }) => {
  const [value, setValue] = React.useState("");
  const [tasks, setTask] = useLocalStorage("tasks", []);

  function handleClick(event) {
    setValue(event.target.value);

    if (event.key === "Enter" && value.trim().length > 0) {
      setTask([...tasks, { text: event.target.value, done: false }]);
      setValue("");
    }
  }

  function handleToggleTheme() {
    setLight(!light);
  }

  return (
    <main className="todo-app">
      <header className="todo-header">
        <h1 className="todo-title">T O D O</h1>
        <span className="toggle-theme" onClick={handleToggleTheme}>
          <img
            src={light ? toggleImageLight : toggleImageDark}
            alt="toggle theme"
          />
        </span>
      </header>

      <Input
        onKeyDown={handleClick}
        onChange={handleClick}
        value={value}
        light={light}
      />
      <Tasks tasks={tasks} setTask={setTask} light={light} />
    </main>
  );
};

export default Todo;
