import { useState, useEffect } from "react";
import "./categories.css";
import { RulesModal } from "../index";
import { useQuiz } from "../../Context/QuizProvider";
import { useAuth } from "../../Context/UserProvider";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const { dispatch } = useQuiz();
  const [modalVisibility, setModalVisibility] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();
  const showModal = (quizType: string) => {
    
    if (token) {
      dispatch({
        type: "SET_QUIZ_TYPE",
        payload: {quizType}
      });
      setModalVisibility(!modalVisibility);
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="category-page">
        <div className="category-info">
          <h2>Explore Different Categories</h2>
        </div>
        <div className="category-container">
          <div className="card">
            <div className="card-text">
              <h3 className="category">Tech & Programming </h3>
              <p>
                Quiz to test your knowledge regarding{" "}
                <b>Tech and Programming</b>
              </p>
              <button
                className="btn btn-quiz"
                onClick={() => showModal("TECH")}
              >
                Start Quiz
              </button>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3 className="category">Cricket</h3>
              <p>
                Quiz to test your knowledge regarding <b>Fashion</b>
              </p>
              <button
                className="btn btn-quiz"
                onClick={() => showModal("CRICKET")}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
        {modalVisibility && (
          <RulesModal
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
          />
        )}
      </div>
    </>
  );
};
