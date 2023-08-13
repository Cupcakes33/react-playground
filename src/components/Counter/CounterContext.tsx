import { useState } from "react";
import Counter from "./Counter";

export default function CounterContext() {
  const [total, setTotal] = useState(0);
  const handleTotalCount = () => {
    setTotal((prev) => prev + 1);
  };
  const countStateIcon = () => {
    return total > 10 ? "🔥" : "❄️";
  };
  return (
    <>
      <div className="w-screen h-screen p-10">
        <div>
          Total : {total} {countStateIcon()}
        </div>
        <Counter total={total} onClick={handleTotalCount} />
        <Counter total={total} onClick={handleTotalCount} />
      </div>
    </>
  );
}
