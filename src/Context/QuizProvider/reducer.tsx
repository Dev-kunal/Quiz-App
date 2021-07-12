import { QuizState } from "../../Utils/types";
import { QuizAction } from "../../Utils/actionFlags.types.ts";

export const initialState: QuizState = {
  questions: [],
  quizType: "",
  currentQuestionNo: 0,
  score: 0,
  mesg: "Congratulations..! ",
  stats: [
    { name: "TECH", attempts: 0, highScore: 0 },
    { name: "CRICKET", attempts: 0, highScore: 0 }
  ]
};

export const quizReducer = (state: QuizState, action: QuizAction) => {
  switch (action.type) {
    case "SET_QUIZ_TYPE":
      return {
        ...state,
        quizType: action.payload
      };
    case "SET_QUIZ":
      console.log("qustions from Reducer", action.payload);
      return {
        ...state,
        questions: action.payload
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionNo: state.currentQuestionNo + 1
      };
    case "INCREMENT_SCORE":
      return {
        ...state,
        score: state.score + action.payload
      };
    case "DECREMENT_SCORE":
      return {
        ...state,
        score: state.score - action.payload
      };
    case "CLEAR_QUIZ":
      return {
        ...state,
        score: 0,
        currentQuestionNo: 0,
        mesg: ""
      };

    case "END_QUIZ":
      return {
        ...state,
        currentQuestionNo: 0,
        mesg: state.score <= 0 ? "Better Luck Next Time" : "Congratulations",
        stats: state.stats.map((quiz) =>
          quiz.name === state.quizType
            ? {
                ...quiz,
                attempts: quiz.attempts + 1,
                highScore:
                  state.score > quiz.highScore ? state.score : quiz.highScore
              }
            : quiz
        )
      };
    case "QUIT_QUIZ":
      return {
        ...state,
        currentQuestionNo: 0,
        mesg: "Come Back Soon..!",
        stats: state.stats.map((quiz) =>
          quiz.name === state.quizType
            ? {
                ...quiz,
                attempts: quiz.attempts + 1,
                highScore:
                  state.score > quiz.highScore ? state.score : quiz.highScore
              }
            : quiz
        )
      };

    default:
      return state;
  }
};
