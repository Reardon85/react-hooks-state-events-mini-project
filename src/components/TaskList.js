import React from "react";
import Task from "./Task";

function TaskList({tasks, onSetTasks}) {

  const taskArray = tasks.map((task, index) => {

    return <Task key={index} onSetTasks={onSetTasks} id={index} text={task.text} category={task.category} />
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskArray}
    </div>
  );
}

export default TaskList;
