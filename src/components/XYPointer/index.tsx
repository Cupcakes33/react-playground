// import { useEffect, useState } from "react";
import { useState } from "react";

export default function XYPointer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   window.addEventListener("mousemove", (e) => {
  //     setMousePos({ x: e.clientX, y: e.clientY });
  //   });

  //   return () => {
  //     window.removeEventListener("mousemove", (e) => {
  //       setMousePos({ x: e.clientX, y: e.clientY });
  //     });
  //   };
  // }, []);

  return (
    <div
      className="relative w-screen h-screen bg-gray-200"
      onPointerMove={(e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      }}
    >
      <p>{`${mousePos.x} / ${mousePos.y}`}</p>
      <div
        className="absolute w-8 h-8 transition ease-in-out delay-150 bg-red-200 rounded-full"
        style={{ top: mousePos.y, left: mousePos.x }}
      />
    </div>
  );
}
