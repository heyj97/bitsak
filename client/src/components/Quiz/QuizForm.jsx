import { useState } from "react";
import useGetFetch from "../../utils/useGetFetch";
import AnswerForm from "./AnswerForm";
import Question from "./Question";

import styles from "./Quiz.module.css";

const QuizForm = ({
  setQuestionData,
  setCorrectCount,
  correctCount,
  setIsEnd,
  setIsProgress,
}) => {
  const { data, isLoading, error } = useGetFetch("http://localhost:5001/quiz");
  const [quizNum, setQuizNum] = useState(0);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error...</div>;
  if (quizNum === data.length) {
    const newQArr = [...data];
    setQuestionData(newQArr);
    setIsEnd(true);
    setIsProgress(false);
  }
  return (
    <div className={styles.quizContainer}>
      {quizNum < data.length && (
        <div className={styles.quizTitleContainer}>
          <Question quizNum={quizNum + 1} quiz={data[quizNum].question} />
          <AnswerForm
            answer={data[quizNum].answer}
            correctCount={correctCount}
            setCorrectCount={setCorrectCount}
            quizNum={quizNum}
            setQuizNum={setQuizNum}
          />
        </div>
      )}
    </div>
  );
};

export default QuizForm;
