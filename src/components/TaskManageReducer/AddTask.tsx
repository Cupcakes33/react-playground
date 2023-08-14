import { useState } from "react";

type Props = {
  onAddTask: (arg: string) => void;
};

export default function AddTask({ onAddTask }: Props) {
  const [text, setText] = useState("");
  const handleSubmitTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setText("");
    onAddTask(text);
  };
  return (
    <form onSubmit={handleSubmitTask}>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
