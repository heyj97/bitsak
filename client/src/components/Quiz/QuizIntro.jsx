import { useNavigate } from "react-router-dom";
import styles from "./Quiz.module.css";

const QuizIntro = ({ setIsStart, setIsProgress }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.quizHomeContainer}>
      <div className={styles.quizHomeContent}>
        <h2 className={styles.quizTitle}>
          <span style={{ color: "#d4bf00" }}>빛공해</span> 인식퀴즈
        </h2>
        <p className={styles.quizDesc}>
          당신은 빛 공해에 대해 얼마나 알고 계신가요?
          <br /> 문제를 통해 나의 인식도를 파악해봅시다.
        </p>
      </div>
      <div className={styles.linkBtnContainer}>
        <button
          onClick={() => {
            setIsStart(false);
            setIsProgress(true);
          }}
        >
          퀴즈시작
        </button>
        <button onClick={() => navigate("/introduce")}>빛공해 소개</button>
      </div>
    </div>
  );
};

export default QuizIntro;
