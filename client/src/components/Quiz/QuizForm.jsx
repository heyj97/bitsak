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
        <div className={styles.quizTitleContainer}></div>
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
