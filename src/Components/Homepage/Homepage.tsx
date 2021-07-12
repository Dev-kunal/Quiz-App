import "./homepage.css";
import { useNavigate } from "react-router-dom";
export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage">
        <section className="main">
          <div className="hero">
            <div className="hero-img">
              <img src="./quiz.svg" alt="hero" height="auto" width="100%" />
            </div>
            <div className="intro-div">
              <h1 className="hero-heading">
                Welcome to{" "}
                <span style={{ color: "var(--myColor)" }}> Quizzy</span>
                <br />
                Build & Test Your Knowledge by taking tests in diffferent
                categories
              </h1>
              <div className="button-holder">
                <button
                  className="btn btn-lg"
                  onClick={() => navigate("/categories")}
                >
                  Take a Quiz
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
