import { Quiz } from "../Utils/types";

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

export type QuizAction =
  | {
      type: typeof SET_QUIZ_TYPE;
      payload: string;
    }
  | {
      type: typeof SET_QUIZ;
      payload: Quiz;
    }
  | {
      type: typeof INCREMENT_SCORE;
      payload: number;
    }
  | {
      type: typeof DECREMENT_SCORE;
      payload: number;
    };

export type UserAction =
  | {
      type: typeof SET_LOGIN;
      payload: { token: string; username: string };
    }
  | {
      type: typeof SET_LOGOUT;
    };
