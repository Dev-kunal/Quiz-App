import { useEffect, useState } from "react";
import { useQuiz } from "../../Context/QuizProvider";
import { Option } from "../../Utils/Data";

type optionBtnProps = {
  option: Option,
  
};

export const OptionBtn = ({
  option: { text, isRight }}:
optionBtnProps) => {
  const [selected, setSelected] = useState(false);
  const { dispatch } = useQuiz();

  const optionClick = (isRight: boolean) => {
    setSelected(true);
  };

  useEffect(() => {
    setSelected(false);
  }, [text]);
  // console.log("selected",selected);

  return (
    <>
      <button
        onClick={() => optionClick(isRight)}
        className={`option-btn ${selected && (isRight ? "right" : "wrong")}`}
      >
        {text}
      </button>
    </>
  );
};
