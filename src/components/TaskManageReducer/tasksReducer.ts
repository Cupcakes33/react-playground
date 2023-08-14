import { Task } from ".";

type TaskAction =
  | { type: "SET"; tasks: Task[] }
  | { type: "ADD"; text: Task["text"] }
  | { type: "UPDATE"; task: Task }
  | { type: "DELETE"; id: Task["id"] };

const tasksReducer = (tasks: Task[], action: TaskAction) => {
  switch (action.type) {
    case "SET":
      return action.tasks;
    case "ADD":
      return [
        ...tasks,
        {
          id: Math.random(),
          text: action.text,
          done: false,
        },
      ];
    case "UPDATE":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "DELETE":
      return tasks.filter((t) => t.id !== action.id);
    default:
      throw Error("unknown action type");
  }
};

export default tasksReducer;
