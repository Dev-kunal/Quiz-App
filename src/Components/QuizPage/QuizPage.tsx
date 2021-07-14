import "./quiz.css";
import { Quiz } from "./Quiz";
import { useQuiz } from "../../Context/QuizProvider";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { QuizData, serverError } from "../../Utils/types";
import { instance } from "../../Utils/authConfig";
import { useState } from "react";
import Loader from "react-loader-spinner";

export const QuizPage = () => {
  const {state:{quizType,questions},dispatch} = useQuiz();
  console.log(quizType);
   const [loading, setLoading] = useState(false);

  console.log(quizType, "before api call");
  const getQuiz = async (): Promise<QuizData | serverError> => {
    try {
       setLoading(true)
      const response = await instance.post<QuizData>(
        "/quiz", 
        {
          category: quizType
        }
      );
      setLoading(false)
      return response.data;
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError =( error as AxiosError<serverError>)
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
    }
     return {errorMessage:"Thers an error"}
  };

  useEffect(() => {
    (async () => {
      const quizData = await getQuiz();
      console.log(quizData)
        if ("quiz" in quizData) {
            console.log("data from QuizPage=>", quizData);
           dispatch({ type: "SET_QUIZ", payload: quizData });
        }
    })();
  }, []); 

  return (
    <>
      {loading && (
        <div className="loader-container">
          <Loader
            type="RevolvingDot"
            color="#2bc48a"
            height={100}
            width={100}
            timeout={2000}
          />
        </div>
      )}
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="quiz">{questions?.length > 0 && <Quiz />}</div>
        </div>
      </div>
    </>
  );
};
