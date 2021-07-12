import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import { useAuth } from "./Context/UserProvider";
import { PrivateRoute } from "./Utils/PrivateRoute";

export default function App() {
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
