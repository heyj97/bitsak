import styles from "./Quiz.module.css";

const Question = ({ quizNum, quiz }) => {
  return (
    <div className={styles.questionContainer}>
      <p className={styles.quizCount}>{quizNum} / 5</p>
      <div className={styles.questionBox}>
        <h3 className={styles.questionNum}>Quiz {quizNum}</h3>
        <h4 className={styles.questionTitle}>{quiz}</h4>
      </div>
    </div>
  );
};

export default Question;
