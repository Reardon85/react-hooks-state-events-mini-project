import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState([...TASKS])
  const [category, setCategory] = useState("All");
  const [delIndex, setDelIndex] =useState("")

  const handleDelete = (delIndex) => {
    const newArray = tasks.filter((task, index) => {
      if (index === delIndex) return false
      return true
    })

    setTasks([...newArray])
  }

  const addTask = (newTask) => {

    setTasks([...tasks, newTask])
  }



  const visibleTasks = tasks.filter((task) => {
    return category === "All" || task.category === category
  })



  


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
      <NewTaskForm  categories={CATEGORIES} onTaskFormSubmit={addTask}/>
      <TaskList tasks={visibleTasks} onSetTasks={handleDelete} />
    </div>
  );
}

export default App;
