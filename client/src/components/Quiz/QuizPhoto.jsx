import skyImg from "/QuizResult/sky.png";
import cityImg from "/QuizResult/city.jpg";
import styles from "./Quiz.module.css";
import { skyCssFunc, cityCssFunc } from "../../utils/quizResultCss";

const Quiz100 = ({ point, description }) => {
  return (
    <>
      <div className={styles.quizImageContainer}>
        <img src={skyImg} alt="sky" className={skyCssFunc(point)} />
        <img src={cityImg} alt="city" className={cityCssFunc(point)} />
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

export default Quiz100;
