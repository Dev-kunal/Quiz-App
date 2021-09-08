import { useNavigate } from "react-router-dom";
import "./modal.css";
type props = {
  modalVisibility: boolean;
  setModalVisibility: Function;
};

export const RulesModal = ({ modalVisibility, setModalVisibility }: props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="modal-container"></div>
      <div className="modal">
        <button
          className="btn modal-btn"
          onClick={() => setModalVisibility(!modalVisibility)}
        >
          X
        </button>

        <div className="modal-text">
          <h3 className="category">Rules</h3>
          <ul className="list rules">
            <li className="rule">
              There are a total of <span className="imp"> 5 </span> questions.
            </li>
            <li className="rule">
              Each question carry <span className="imp"> 10 </span> points.
            </li>
            <li className="rule">
              You'll get <span className="imp"> 30 seconds </span> to answer
              each question.
            </li>
            <li className="rule">
              Every wrong answer has a negative marking of
              <span className="imp"> 5</span> points
            </li>
          </ul>

          <button className="btn btn-quiz" onClick={() => navigate("/quiz")}>
            Let's Begin
          </button>
        </div>
      </div>
    </>
  );
};
