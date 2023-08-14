import { useState } from "react";

type Props = {
  onAddTask: (arg: string) => void;
};

export default function AddTask({ onAddTask }: Props) {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => {
        e.preventDefault();
        setText("");
        onAddTask(text);
      }}
    >
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
