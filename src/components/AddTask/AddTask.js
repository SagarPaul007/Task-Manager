import React, { useState } from "react";
import "./AddTask.css";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ tasks, setTasks }) => {
  const [description, setDescription] = useState("");

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const saveTask = (e) => {
    e.preventDefault();
    if (description.trim().length === 0) {
      return;
    }
    let key = uuidv4();
    const task = { key, description };
    let localTask = JSON.parse(localStorage.getItem("tasks")) || [];
    localTask.unshift(task);
    localStorage.setItem("tasks", JSON.stringify(localTask));
    setTasks([task, ...tasks]);
    setDescription("");
  };

  return (
    <div className="add-task">
      <form>
        <div className="control">
          <label>Description</label>
          <input
            value={description}
            type="text"
            onChange={descriptionChangeHandler}
          />
        </div>
        <button type="submit" className="btn" onClick={saveTask}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
