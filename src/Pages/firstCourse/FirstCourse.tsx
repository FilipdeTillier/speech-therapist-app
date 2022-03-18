import { ReactElement, useState } from "react";
import { table } from "./questionsfirst";

import "./FirstCourse.scss";

export const FirstCourse = (): ReactElement => {
  const [question, setQuestion] = useState(0);
  const [input, setInput] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const ButtonClick = (correct: any) => {
    const nextQuestion = question + 1;

    if (correct == input) {
      setScore(score + 1);
      if (nextQuestion < table.length) {
        setQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    } else {
      setQuestion(question);
      alert("Wrong answear Try again!");
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <div className="congratulations">Gratulacje</div>
          <div className="score-text">Wynik to:</div>
          <div className="score">
            {score}/{table.length}
          </div>
        </div>
      ) : (
        <div>
          <div className="stepper">
            <button onClick={() => setQuestion(question - 1)}>
              Poprzednie pytanie
            </button>
            <div className="stepper-count">
              {question + 1}/{table.length}
            </div>
            <button onClick={() => setQuestion(question + 1)}>
              Nastepne pytanie
            </button>
          </div>
          <img className="image" src={table[question].image} />
          <div>
            {table[question].option.map((option) => (
              <div>
                <div className="answear" key={option.answear}>
                  {option.answear}
                </div>
                <input
                  className="input-answear"
                  type="text"
                  onChange={handleChange}
                />
                <button
                  className="button-correct"
                  onClick={() => ButtonClick(option.correct)}
                >
                  Submit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
