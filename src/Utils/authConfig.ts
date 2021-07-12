import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000"
});

export const setAuthForServiceCalls = (token:string) => {
  instance.defaults.headers.common["Authorization"] = token;
};


  export const saveUserToLocalStorage = (user, token) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        userId: user._id,
        token: token,
        username: user.username,
      })
    );
  };
