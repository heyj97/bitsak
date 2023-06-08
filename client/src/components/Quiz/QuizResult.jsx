import { useSearchParams, Link } from "react-router-dom";
import countToResult from "../../utils/countToResult";
import QuizPhoto from "./QuizPhoto";
import styles from "./Quiz.module.css";
import QuizSolution from "./QuizSolution";

const QuizResult = () => {
  const [searchParams] = useSearchParams();
  const correctCount = searchParams.get("correctCount");

  const data = countToResult(correctCount);

  return (
    <>
      <div className={styles.resultContainer}>
        <QuizPhoto point={data.point} description={data.description} />
        <QuizSolution
          quizData={[
            { question: "test1", answer: true, description: "test1 desc" },
            { question: "test2", answer: true, description: "test2 desc" },
            { question: "test3", answer: false, description: "test3 desc" },
            { question: "test4", answer: true, description: "test4 desc" },
            { question: "test5", answer: false, description: "test5 desc" },
          ]}
        />
        <div className={styles.linkBtnContainer}>
          <Link to="/introduce">빛공해 더 알아보기</Link>
          {/* <button>결과 캡쳐하기</button> 기능 구현되면 주석풀고 .linkBtnContainer > a:nth-child(2)를 child(3)으로 수정 */}
          <Link to="/gallery">빛공해 지도 갤러리</Link>
        </div>
      </div>
    </>
  );
};

export default QuizResult;
