import { useEffect, useState } from "react";
import QuizForm from "./QuizForm";
import { quizApi } from "../../constants/Quiz";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [correctCount, setCorrectCount] = useState(0);
  const [nowPage, setNowPage] = useState(1);
  const quizes = quizApi;
  const navigate = useNavigate();

  useEffect(() => {
    if (nowPage > 5) {
      navigate(`/quiz-result?correctCount=${correctCount}`);
    }
  }, [nowPage]);

  return (
    <>
      {quizes && nowPage <= 5 && (
        <QuizForm
          quizNum={nowPage}
          quiz={quizes[nowPage - 1].question}
          answer={quizes[nowPage - 1].answer}
          correctCount={correctCount}
          setCorrectCount={setCorrectCount}
          nowPage={nowPage}
          setNowPage={setNowPage}
        />
      )}
    </>
  );
};

export default Quiz;
