import { UserState } from "../../Utils/types";
import { UserAction } from "../../Utils/actionFlags.types";

const dataFromLocalStorage = JSON.parse(localStorage?.getItem("user"));

const token = dataFromLocalStorage ? dataFromLocalStorage.token : null;
const username = dataFromLocalStorage ? dataFromLocalStorage.username : null;
const fullname = dataFromLocalStorage ? dataFromLocalStorage.fullname : null;

export const initialState: UserState = {
  token,
  username,
  fullname
};

export const authReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case "SET_LOGIN":
      console.log("inside login");
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.username,
        fullname: action.payload.fullname
      };
    case "SET_LOGOUT":
      localStorage.removeItem("login");
      return {
        ...state,
        login: false,
        user: null
      };
    default:
      return state;
  }
};
