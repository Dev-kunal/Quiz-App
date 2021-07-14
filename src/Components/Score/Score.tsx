import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../Context/QuizProvider";
import "./score.css";

export const Score = () => {
  const {state:{ score, mesg,}, dispatch } = useQuiz();
  const navigate = useNavigate();

  const clearOldQuiz = () => {
    navigate("/categories");
  };
  useEffect(() => {
    return () => {
      dispatch({
        type: "CLEAR_QUIZ"
      });
    };
  }, []);
  return (
    <div className="score-container">
      <div className="score-card">
        <div className="card-text">
          <h3 className="category">
            {mesg} <span></span>
          </h3>
          <p>your score is {score}</p>
          <button className="btn" onClick={clearOldQuiz}>
            Take a Quiz
          </button>
          <button className="btn" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};
