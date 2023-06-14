import styles from "./Quiz.module.css";

const QuizSolution = ({ quizData, correctIdx }) => {
  return (
    <ul className={styles.quizSolutionUl}>
      {quizData &&
        quizData.map((quiz, idx) => {
          return (
            <QuizSolutionItem
              correctIdx={correctIdx}
              id={quiz.question_id}
              question={quiz.question}
              answer={quiz.answer}
              explanation={quiz.explanation}
              key={idx}
            />
          );
        })}
    </ul>
  );
};

const QuizSolutionItem = ({
  correctIdx,
  id,
  question,
  answer,
  explanation,
}) => {
  return (
    <li
      className={
        correctIdx.includes(id)
          ? styles.quizSolutionUlTrue
          : styles.quizSolutionUlFalse
      }
    >
      <h3>
        {correctIdx.includes(id) ? "정답" : "오답"}) {question}
      </h3>
      <p>{explanation}</p>
    </li>
  );
};

export default QuizSolution;
