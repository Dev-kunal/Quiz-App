import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import { quizReducer, initialState } from "./reducer";

export const QuizContext = createContext(null);

export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
