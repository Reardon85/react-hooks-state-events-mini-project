import React from "react";

function Task({text, category, id, onSetTasks}) {


  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => {onSetTasks(id)}} className="delete">X</button>
    </div>
  );
}

export default Task;
