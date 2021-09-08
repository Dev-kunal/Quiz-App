import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { QuizProvider } from "./Context/QuizProvider";
import { AuthProvider } from "./Context/UserProvider";
const rootElement = document.getElementById("root");
render(
  <AuthProvider>
    <QuizProvider>
      <Router>
        <App />
      </Router>
    </QuizProvider>
  </AuthProvider>,
  rootElement
);
