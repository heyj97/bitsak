import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";
const QuizHome = () => {
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
        <Link to="/quiz">퀴즈시작</Link>
        <Link to="/quiz">빛공해 소개</Link>
      </div>
    </div>
  );
};

export default QuizHome;
