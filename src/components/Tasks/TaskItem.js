import "./TaskItem.css";

const TaskItem = ({ task, tasks, setTasks }) => {
  const deleteTaskItem = (e) => {
    let updatedTask = tasks.filter((t) => t.key !== task.key);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    setTasks(updatedTask);
  };
  return (
    <div onClick={deleteTaskItem} className="task-item">
      {task.description}
    </div>
  );
};

export default TaskItem;
