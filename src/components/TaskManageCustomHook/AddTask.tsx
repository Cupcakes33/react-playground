import { useState } from "react";
import { TaskAction } from "./useTask";

type Props = {
  onAddTask: TaskAction["onAddTask"];
};

export default function AddTask({ onAddTask }: Props) {
  const [text, setText] = useState("");

  const handleTaskSumbit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setText("");
    onAddTask(text);
  };
  return (
    <form onSubmit={handleTaskSumbit}>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
