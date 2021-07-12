import "./quiz.css";
import { Quiz } from "./Quiz";
import { useQuiz } from "../../Context/QuizProvider";
import axios, { AxiosError, isAxiosError } from "axios";
import { useEffect } from "react";
import { QuizData, serverError } from "../../Utils/types";

export const QuizPage = () => {
  const { dispatch, quizType, questions } = useQuiz();

  const getQuiz = async (): Promise<QuizData | serverError> => {
    try {
      const response = await axios.post<QuizData>(
        "http://localhost:3000/quiz",
        {
          category: quizType
        }
      );
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        const serverError = error as AxiosError<serverError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
    }
  };

  useEffect(() => {
    (async () => {
      const data = await getQuiz();
      if (data) {
        if ("quiz" in data) {
          console.log("data from QuizPage=>", data);
          dispatch({ type: "SET_QUIZ", payload: data.quiz });
        }
      } else {
      // can show a toast here 
      }
    })();
  }, []);

  return (
    <>
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="quiz">{questions.length > 0 && <Quiz />}</div>
        </div>
      </div>
    </>
  );
};
