import { Quiz,Question } from "../Utils/types";

export const SET_QUIZ_TYPE = "SET_QUIZ_TYPE";
export const SET_QUIZ = "SET_QUIZ";
export const NEXT_QUESTION = "NEXT_QUESTION";
export const INCREMENT_SCORE = "INCREMENT_SCORE";
export const DECREMENT_SCORE = "DECREMENT_SCORE";
export const CLEAR_QUIZ = "CLEAR_QUIZ";
export const END_QUIZ = "END_QUIZ";
export const QUIT_QUIZ = "QUIT_QUIZ";
export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";
export const CLEAR_STATS = "CLEAR_STATS";
export type QuizAction =
  | {
      type: typeof SET_QUIZ_TYPE;
       payload: {quizType:string}
    }
  | {
      type: typeof SET_QUIZ;
      payload: {quiz:Array<Question>}
    }
  | {
      type: typeof INCREMENT_SCORE;
      payload: number;
    }
  | {
      type: typeof DECREMENT_SCORE;
      payload: number;
    }
  | {
  type: typeof NEXT_QUESTION;
     
}
  | {
  type: typeof CLEAR_QUIZ;
     
}
  | {
  type: typeof END_QUIZ;
     
}
  | {
  type: typeof QUIT_QUIZ;
     
}
  | {
  type: typeof CLEAR_STATS;
     
};

export type UserAction =
  | {
      type: typeof SET_LOGIN;
      payload: { token: string; username: string };
    }
  | {
      type: typeof SET_LOGOUT;
    };
