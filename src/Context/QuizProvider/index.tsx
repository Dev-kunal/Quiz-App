import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import { quizReducer, initialState } from "./reducer";
import { QuizState } from "../../Utils/types";
import { QuizAction } from "../../Utils/actionFlags.types";



export const QuizContext = createContext<{ state: QuizState,dispatch: React.Dispatch<any> }>
  ({
  state: initialState,
  dispatch: ()=>null
})


export const QuizProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{state , dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => useContext(QuizContext);
