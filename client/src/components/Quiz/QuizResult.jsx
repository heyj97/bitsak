import { useSearchParams, Link, useNavigate } from "react-router-dom";
import countToResult from "../../utils/countToResult";
import QuizPhoto from "./QuizPhoto";
import styles from "./Quiz.module.css";
import QuizSolution from "./QuizSolution";

const QuizResult = ({ questionData, correctCount }) => {
  const data = countToResult(correctCount);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.resultContainer}>
        <QuizPhoto point={data.point} description={data.description} />
        <QuizSolution quizData={questionData} />
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
