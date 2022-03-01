import { ReactElement, useState } from "react";
import { table } from "./questionsfirst";

export const FirstCourse = (): ReactElement => {
  const [question, setQuestion] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const ButtonClick = (correct: any) => {
    const nextQuestion = question + 1;
    if (nextQuestion < table.length) {
      setQuestion(nextQuestion);
    }
    if (correct == input) {
      setQuestion(nextQuestion);
    } else {
      setQuestion(question);
      alert("Wrong answear Try again!");
    }
  };

  return (
    <div>
      <img src={table[question].image} />
      <div>
        {table[question].option.map((option) => (
          <div>
            <div key={option.answear}>{option.answear}</div>
            <input type="text" onChange={handleChange} />
            <button onClick={() => ButtonClick(option.correct)}>Submit</button>
          </div>
        ))}
      </div>
    </div>
  );
};
