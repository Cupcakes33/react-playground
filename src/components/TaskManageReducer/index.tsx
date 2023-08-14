import { useEffect, useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./tasksReducer";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export default function TaskManageReducer() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const handleAddTask = (text: Task["text"]) => {
    dispatch({ type: "ADD", text: text });
  };

  const handleChangeTask = (task: Task) => {
    dispatch({ type: "UPDATE", task: task });
  };

  const handleDeleteTask = (id: Task["id"]) => {
    dispatch({ type: "DELETE", id: id });
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/data/tasks.json");
        const data = await response.json();
        if (data) {
          dispatch({ type: "SET", tasks: data });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="p-3 border">
        <h1 className="border">Task</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
