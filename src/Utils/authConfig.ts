import axios from "axios";

export const instance = axios.create({
  baseURL: "https://quiz-app--server.herokuapp.com"
});

export const setAuthForServiceCalls = (token: string) => {
  instance.defaults.headers.common["Authorization"] = token;
};


  export const saveUserToLocalStorage = (user:any, token:string) => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        userId: user._id,
        token: token,
        username: user.username,
      })
    );
  };

  export const setupAuthExceptionHandler=(logOutUser:any) =>{
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logOutUser();
      }
      return Promise.reject(error);
    }
  );
}
