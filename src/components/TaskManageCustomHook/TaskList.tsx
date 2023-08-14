import TaskItem from "./TaskItem";
import { Task } from ".";
import { TaskAction } from "./useTask";

type Props = {
  tasks: Task[];
  onChangeTask: TaskAction["onChangeTask"];
  onDeleteTask: TaskAction["onDeleteTask"];
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className="border">
          <TaskItem
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}
