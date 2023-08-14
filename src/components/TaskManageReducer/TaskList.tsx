import { Task } from ".";
import TaskItem from "./TaskItem";

type Props = {
  tasks: Task[];
  onChangeTask: (arg: Task) => void;
  onDeleteTask: (arg: Task["id"]) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
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
