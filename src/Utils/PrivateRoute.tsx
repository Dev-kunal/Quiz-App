import { useAuth } from "../Context/UserProvider";
import { Route, Navigate } from "react-router-dom";
import React from "react";



export const PrivateRoute= ({path, element}: {path:string; element: any}) => {
  const { token } = useAuth();
  
  return token ? (
    <Route element={element} path={path} />
  ) : (
    <Navigate to="/login" state={{ from: path }} replace={true} />
  );
};
