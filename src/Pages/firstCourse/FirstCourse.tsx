import { ReactElement, useState } from "react";
import { table } from "./questionsfirst";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./FirstCourse.scss";

export const FirstCourse = (): ReactElement => {
  const [question, setQuestion] = useState(0);
  const [input, setInput] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleChange = (event: any) => {
    setInput(event.target.value);
  };

  const buttonClick = (correct: any) => {
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
      toast.error("Wrong answear Try again!", {
        position: "top-center",
        autoClose: 2000,
      });
    }

    setInput("");
  };

  const previousQuestion = () => {
    if (question > 0) {
      setQuestion(question - 1);
    } else {
      setQuestion(question);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = question + 1;
    if (nextQuestion < table.length) {
      setQuestion(nextQuestion);
    } else {
      setShowScore(true);
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
        <div className="container">
          <ToastContainer />
          <div className="header">
            <div className="command">Wpisz brakujaca litere</div>
            <div className="stepper">
              <button
                className="stepper-button"
                onClick={() => previousQuestion()}
              >
                <NavigateBeforeIcon />
              </button>
              <div className="stepper-count">
                {question + 1}/{table.length}
              </div>
              <button className="stepper-button" onClick={() => nextQuestion()}>
                <NavigateNextIcon />
              </button>
            </div>
          </div>
          <img className="image" src={table[question].image} />
          <div>
            {table[question].option.map((option) => (
              <div>
                <div className="answer" key={option.answear}>
                  {option.answear.split("").map((word) => (
                    <div className="answer-word b" key={word}>
                      {option.answear[2] === word ? (
                        <input
                          className="answer-input answer-word"
                          maxLength={1}
                          onChange={handleChange}
                        />
                      ) : (
                        word
                      )}
                    </div>
                  ))}
                </div>
                <button
                  className="button-correct"
                  onClick={() => buttonClick(option.answear[2])}
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
