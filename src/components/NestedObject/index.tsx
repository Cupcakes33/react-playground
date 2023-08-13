import React, { useState } from "react";

type Person = {
  name: string;
  intro: string;
};

type MachedPerson = Person & {
  mentor: Person;
};

const INIT: MachedPerson = {
  name: "soo",
  intro: "안",
  mentor: {
    name: "yuni",
    intro: "dev",
  },
};

export default function NestedObject() {
  const [person, setPerson] = useState(INIT);
  const [open, setOpen] = useState({
    nameButton: false,
    introButton: false,
  });

  const handleButtonOpen = (buttonType: "nameButton" | "introButton") => {
    setOpen((prev) => ({ ...prev, [buttonType]: !prev[buttonType] }));
  };
  
  return (
    <div>
      <div>
        <h1>name: {person.name}</h1>
        <p>intro:{person.intro}</p>
      </div>
      <div>
        <h1>mentor name: {person.mentor.name}</h1>
        <p>mentor intro: {person.mentor.intro}</p>
      </div>
      <div>
        <button>멘토 이름 바꾸기</button>
        {open.nameButton ? <input></input> : null}
      </div>
      <div>
        <button>멘토 소개 바꾸기</button>
        {open.introButton ? <input></input> : null}
      </div>
    </div>
  );
}
