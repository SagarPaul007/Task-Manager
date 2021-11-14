import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  return (
    <div>
      <div className="app">Task Manager</div>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
