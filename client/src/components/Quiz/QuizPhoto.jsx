import randomImg from "../../constants/randomImg";
import styles from "./Quiz.module.css";
import nullImg from "/QuizResult/noImg.png";

const QuizPhoto = ({ point, description }) => {
  return (
    <>
      <div className={styles.quizImageContainer}>
        <img
          src={randomImg()}
          className={styles.quizCityImg}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = nullImg;
          }}
        />
      </div>
      <div className={styles.quizResultContent}>
        <h2>
          <span className={styles.pointSpan}>{point}점</span> 입니다!
        </h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default QuizPhoto;
