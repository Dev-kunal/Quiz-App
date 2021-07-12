import { useQuiz } from "../../Context/QuizProvider";
import { StatsType } from "../../Utils/types";
import "./stats.css";

export const Stats = () => {
  const {stats } = useQuiz();
  return (
    <div className="stats-page">
      <h2>Score & Statistics</h2>
      <table className="table" cellPadding="0" cellSpacing="0">
        <thead>
          {" "}
          <tr className="tr">
            <th className="th">Quiz Name</th>
            <th className="th">Attempts</th>
            <th className="th">Highest Score</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(({ name, attempts, highScore }:StatsType) => (
            <tr className="tr">
              <td className="td">{name}</td>
              <td className="td">{attempts}</td>
              <td className="td">{highScore}</td>
            </tr>
          ))}
         
        </tbody>
      </table>
      <button className="btn btn-quiz">Clear Stats</button>
    </div>
  );
};
