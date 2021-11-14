import "./Tasks.css";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, setTasks }) => {
  if (tasks == null || tasks.length === 0) {
    return (
      <div className="tasks">
        <h1 className="not-found">No tasks found</h1>
      </div>
    );
  } else {
    return (
      <div className="all-tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.key}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    );
  }
};

export default Tasks;
