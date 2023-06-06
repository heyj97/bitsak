import AnswerForm from "./AnswerForm";
import Question from "./Question";

import styles from "./Quiz.module.css";

const QuizForm = ({
  quizNum,
  quiz,
  answer,
  correctCount,
  setCorrectCount,
  nowPage,
  setNowPage,
}) => {
  return (
    <>
      <div className={styles.quizContainer}>
        <div className={styles.quizTitleContainer}>
          <h2 className={styles.quizTitle}>
            <span style={{ color: "#d4bf00" }}>빛공해</span> 인식퀴즈
          </h2>
          <p className={styles.quizDesc}>
            당신은 '빛공해'에 대해 얼마나 알고계신가요?
          </p>
        </div>
        <Question quizNum={quizNum} quiz={quiz} />
        <AnswerForm
          answer={answer}
          correctCount={correctCount}
          setCorrectCount={setCorrectCount}
          nowPage={nowPage}
          setNowPage={setNowPage}
        />
      </div>
    </>
  );
};

export default QuizForm;
