import { Question, QuizState, StatsType } from "../../Utils/types";
import { QuizAction } from "../../Utils/actionFlags.types";

const statsFromLocalStorage = JSON.parse(localStorage.getItem("Stats")!) || [
    { name: "TECH", attempts: 0, highScore: 0 },
    { name: "CRICKET", attempts: 0, highScore: 0 }
    ];
export const initialState: QuizState = {
  questions: [],
  quizType: "",
  currentQuestionNo: 0,
  score: 0,
  mesg: "Congratulations..!🥳🎉",
  stats: statsFromLocalStorage
};


export const quizReducer = (state: QuizState, action: QuizAction):QuizState => {
  switch (action.type) {
    case "SET_QUIZ_TYPE":
      return {
        ...state,
        quizType: action.payload.quizType,
      }
    case "SET_QUIZ":
      return {
        ...state,
        questions: action.payload.quiz
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
      const updatedState = {
        ...state,
        currentQuestionNo: 0,
        mesg: state.score <= 0 ? "Better Luck Next Time 🤞" : "Congratulations..!🥳🎉",
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
      }
      localStorage.setItem("Stats", JSON.stringify(updatedState.stats));
      return updatedState;
   
  
    case "QUIT_QUIZ":
       const newState= {
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
      localStorage.setItem("Stats",JSON.stringify(newState.stats))
      return newState
    
    case "CLEAR_STATS":
      const newStats = {
        ...state,
        stats: [
          { name: "TECH", attempts: 0, highScore: 0 },
          { name: "CRICKET", attempts: 0, highScore: 0 }
        ]
      }
      localStorage.removeItem("Stats");
      return newStats
    default:
      return state;
  }
};
