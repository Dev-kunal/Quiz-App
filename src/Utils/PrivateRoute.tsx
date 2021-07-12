import { useAuth } from "../Context/UserProvider";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ path, ...props }) => {
  const { login } = useAuth();
  return login ? (
    <Route {...props} />
  ) : (
    <Navigate to="/login" state={{ from: path }} replace={true} />
  );
};
