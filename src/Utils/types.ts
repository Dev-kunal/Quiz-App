export type Option = {
  text: string;
  isRight: boolean;
};
export type Question = {
  question: string;
  points: number;
  negativePoints: number;
  options: Option[];
};
export type Quiz = {
  quizName: string;
  questions: Question[];
};
export type QuizData = {
  quizzes: Quiz[];
};

export type Answers = {
  text: string;
  isRightL: boolean;
};

export type serverError = {
  errormessage: string;
};

export type StatsType = {
  name: string;
  highScore: number;
  attempts: number;
};

export type QuizState = {
  questions: Array<Question>;
  quizType: string;
  currentQuestionNo: number;
  score: number;
  mesg: string;
  stats: Array<StatsType>;
};

export type UserState = {
  token: string;
  username: string;
  fullname: string;
};
