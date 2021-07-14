import { Option } from "../../Utils/types";
import { useQuiz } from "../../Context/QuizProvider";
import { useEffect, useState } from "react";
import { timer } from "../../Utils/timer";
import { useTimer } from "react-timer-hook";
import { Score } from "../index";
import { useNavigate } from "react-router-dom";
import { QuizState } from "../../Utils/types";

export const Quiz = () => {
  const {state:{questions,currentQuestionNo},dispatch } = useQuiz();
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const { seconds, minutes, start, restart, pause } = useTimer({
    expiryTimestamp: timer(),
    onExpire: () => {
      if (currentQuestionNo + 1 <= questions.length) {
        setSelected(true);
        dispatch({
          type: "DECREMENT_SCORE",
          payload: questions[currentQuestionNo].negativePoints 
        });
      }
    }
  });

  const updateScore = (option:Option) => {
    if (option.isRight) {
      dispatch({
        type: "INCREMENT_SCORE",
        payload: questions[currentQuestionNo].points 
      });
    } else {
      dispatch({
        type: "DECREMENT_SCORE",
        payload: questions[currentQuestionNo].negativePoints 
      });
    }
  };

  const optionClick = (option:Option) => {
    updateScore(option);
    setSelected(true);
    pause();
  };
  const quizEnds = () => {
    dispatch({
      type: "END_QUIZ"
    });
    navigate("/score");
  };
  const quitQuiz = () => {
    dispatch({
      type: "QUIT_QUIZ"
    });
    navigate("/score");
  };
  const nextQuestion = () => {
    setSelected(false);
    dispatch({
      type: "NEXT_QUESTION"
    });
    restart(timer());
  };
 
  
 useEffect(() => {
    start();
    return () => {
      pause();
    };
  }, []);

  console.log("from from Quiz ");

  return (
    <>
      {questions.length > 0 && (currentQuestionNo + 1 <= questions.length) ? (
        <>
          <div className="off-quiz">
            <button className="off-btn" onClick={() => quitQuiz()}>
              <img
                className="off-btn-img"
                src="./power.svg"
                alt="power"
                height="auto"
                width="100%"
              />
            </button>
          </div>
          <div className="timer">
            0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
          <div style={{ margin: "0 auto" }}>{`${currentQuestionNo + 1}/${
            questions.length
          }`}</div>
          <div className="question">
            <h3>{questions[currentQuestionNo].question}</h3>
          </div>
          <ul className="list quiz-list">
            {questions[currentQuestionNo].options.map((option:Option) => (
              <li key={option.text}>
                <button
                  onClick={() => optionClick(option)}
                  className={`option-btn ${
                    selected && (option.isRight ? "right" : "wrong")
                  }`}
                >
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
          <button className="btn next-btn" onClick={() => nextQuestion()}>
            Next
          </button>
        </>
      ) : (
        quizEnds()
      )}
    </>
  );
};
