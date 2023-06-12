import { useState } from "react";
import useGetFetch from "../../hooks/useGetFetch";
import AnswerForm from "./AnswerForm";
import Question from "./Question";
import styles from "./Quiz.module.css";
import Error from "../common/Error/Error";
import Spinner from "../common/Spinner/Spinner";

const QuizForm = ({
  setQuestionData,
  setCorrectCount,
  correctCount,
  setIsEnd,
  setIsProgress,
  correctIdx,
  setCorrectIdx,
}) => {
  const { data, isLoading, error } = useGetFetch("quiz");
  const [quizNum, setQuizNum] = useState(0);
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error)
    return (
      <div>
        <Error />
      </div>
    );
  if (quizNum === data.length) {
    const newQArr = [...data];
    setQuestionData(newQArr);
    setIsProgress(false);
    setIsEnd(true);
  }

  return (
    <div className={styles.quizContainer}>
      {quizNum < data.length && (
        <div className={styles.quizTitleContainer}>
          <Question quizNum={quizNum + 1} quiz={data[quizNum].question} />
          <AnswerForm
            answer={data[quizNum].answer}
            answerIdx={data[quizNum].question_id}
            correctCount={correctCount}
            setCorrectCount={setCorrectCount}
            setCorrectIdx={setCorrectIdx}
            correctIdx={correctIdx}
            quizNum={quizNum}
            setQuizNum={setQuizNum}
          />
        </div>
      )}
    </div>
  );
};

export default QuizForm;
