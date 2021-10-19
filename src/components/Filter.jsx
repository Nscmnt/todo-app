import React from "react";
import "./Filter.css";

const Filter = ({ tasks, completed, remainder, all, clear }) => {
  const [left, setLeft] = React.useState(0);

  React.useEffect(() => {
    if (tasks.length > 0) {
      const leftTasks = tasks.filter((task) => !task.done);

      setLeft(leftTasks.length);
    } else {
      setLeft(0);
    }
  }, [tasks]);
  return (
    <div className="filter-wrapper">
      <div className="tasks-remainder">{left} Items left</div>
      <div className="tasks-filtered">
        <span onClick={all}>All</span> <span onClick={remainder}>Active</span>{" "}
        <span onClick={completed}>Completed</span>
      </div>
      <div className="tasks-cleanup" onClick={clear}>
        Clear Completed
      </div>
    </div>
  );
};

export default Filter;
