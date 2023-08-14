import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export type Task = {
  id: number;
  text: string;
  done: boolean;
};

export type TaskAction = {
  onChangeTask: (arg: Task) => void;
  onAddTask: (arg: Task["text"]) => void;
  onDeleteTask: (arg: Task["id"]) => void;
};

export default function TaskManage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(text: Task["text"]) {
    setTasks([
      ...tasks,
      {
        id: Math.random(),
        text: text,
        done: false,
      },
    ]);
  }

  function handleChangeTask(task: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: Task["id"]) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

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
