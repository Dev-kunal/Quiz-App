import { UserState } from "../../Utils/types";
import { UserAction } from "../../Utils/actionFlags.types";

const dataFromLocalStorage = JSON.parse(localStorage.getItem("user")!);

const token = dataFromLocalStorage ? dataFromLocalStorage.token : "";
const username = dataFromLocalStorage ? dataFromLocalStorage.username : "";
const fullname = dataFromLocalStorage ? dataFromLocalStorage.fullname : "";

export const initialState: UserState = {
  token,
  username,
  fullname
};

export const authReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
      };
    case "SET_LOGOUT":
      localStorage.removeItem("user");
      return {
        ...state,
        token: null,
        username: null,
        fullname:null
      };
    default:
      return state;
  }
};
