import React from "react";
import "./Tasks.css";
import checkImage from "../assets/icon-check.svg";
import Filter from "./Filter";

const Tasks = ({ tasks, setTask, light }) => {
  const [tasksRender, setTaskRender] = React.useState([]);

  React.useEffect(() => {
    setTaskRender(tasks);
  }, [tasks]);

  function handleClick({ currentTarget }) {
    const newTasks = tasks.map((task) => {
      if (task.text.trim() === currentTarget.innerText) {
        task.done = !task.done;
      }

      return task;
    });

    setTask(newTasks);
  }

  function completedTasks() {
    const completed = tasks.filter((task) => task.done);
    setTaskRender(completed);
  }

  function remainderTasks() {
    const remainder = tasks.filter((task) => !task.done);
    setTaskRender(remainder);
  }

  function allTasks() {
    setTaskRender(tasks);
  }

  function clearTasks() {
    const clear = window.confirm("Deseja apagar todas as tarefas comcluidas?");

    if (clear) {
      const remainder = tasks.filter((task) => !task.done);
      setTask(remainder);
    }
  }
  return (
    <ul className={`tasks-wrapper ${light && "light"}`}>
      {tasksRender.length > 0 ? (
        tasksRender.map((task, i) => {
          return (
            <li className="todo-wrapper" key={i} onClick={handleClick}>
              <div className={`todo-check-wrapper ${task.done && "check"}`}>
                <div className="todo-check">
                  {task.done && <img src={checkImage} alt="done" />}
                </div>
              </div>
              <div className="todo-task">{task.text}</div>
            </li>
          );
        })
      ) : (
        <div className="empty-todo">Não há Tarefas Disponíveis</div>
      )}
      <footer>
        <Filter
          tasks={tasks}
          completed={completedTasks}
          remainder={remainderTasks}
          all={allTasks}
          clear={clearTasks}
        />
      </footer>
    </ul>
  );
};

export default Tasks;
