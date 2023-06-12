import { useNavigate } from "react-router-dom";
import score from "../../constants/score";
import QuizPhoto from "./QuizPhoto";
import styles from "./Quiz.module.css";
import QuizSolution from "./QuizSolution";
import { useMemo } from "react";

const countToResult = (count) => {
  const countInt = parseInt(count);
  const result = score[Object.keys(score)[countInt]];

  return {
    point: count * 20,
    description: result.description,
  };
};

const QuizResult = ({ questionData, correctCount, correctIdx }) => {
  const data = useMemo(() => countToResult(correctCount), [correctCount]);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.resultContainer}>
        <QuizPhoto point={data.point} description={data.description} />
        <QuizSolution quizData={questionData} correctIdx={correctIdx} />
        <div className={styles.linkBtnContainer}>
          <button onClick={() => navigate("/introduce")}>
            빛공해 더 알아보기
          </button>
          <button onClick={() => navigate("/map")}>빛공해 지도 갤러리</button>
        </div>
      </div>
    </>
  );
};

export default QuizResult;
