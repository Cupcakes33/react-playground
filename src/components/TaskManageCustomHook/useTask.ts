import { useState } from "react";

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

export default function UseTask() {
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

  return { tasks, handleAddTask, handleChangeTask, handleDeleteTask };
}
