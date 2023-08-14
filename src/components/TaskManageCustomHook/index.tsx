import AddTask from "./AddTask";
import TaskList from "./TaskList";
import UseTask from "./useTask";

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

export default function TaskManageCustomHook() {
  const { tasks, handleAddTask, handleChangeTask, handleDeleteTask } =
    UseTask();

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
