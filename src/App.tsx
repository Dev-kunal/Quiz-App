import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { setAuthForServiceCalls } from "./Utils/authConfig";
import {
  Categories,
  Homepage,
  Navbar,
  QuizPage,
  Score,
  User,
  Login,
  Stats,
  Signup
} from "./Components/index";

import { PrivateRoute } from "./Utils/PrivateRoute";
import { useAuth } from "./Context/UserProvider";

export default function App() {
  const { token } = useAuth();
 if (token) {
    setAuthForServiceCalls(token);
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/quiz" element={<QuizPage />} />
        <PrivateRoute path="/score" element={<Score />} />
        <PrivateRoute path="/stats" element={<Stats />} />
      </Routes>
    </div>
  );
}
