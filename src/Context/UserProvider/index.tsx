import { createContext, useContext, useReducer } from "react";
import { authReducer, initialState } from "./reducer";
import React from "react";

const AuthContext = createContext<any | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [state, userDispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, userDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
