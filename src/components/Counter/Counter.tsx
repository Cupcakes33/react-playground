import { useState } from "react";
type Props = {
  total: number;
  onClick: () => void;
};

export default function Counter({ total, onClick }: Props) {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
    onClick();
  };
  return (
    <>
      <div>{`${count}/${total}`}</div>
      <button onClick={handleCount}>+1</button>
    </>
  );
}
