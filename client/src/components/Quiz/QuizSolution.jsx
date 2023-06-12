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
  const boolToOX = (bool) => {
    if (bool) return "O";
    if (!bool) return "X";
  };
  return (
    <li
      className={
        correctIdx.includes(id)
          ? styles.quizSolutionUlTrue
          : styles.quizSolutionUlFalse
      }
    >
      <h3>
        {boolToOX(answer)}. {question}
      </h3>
      <p>{explanation}</p>
    </li>
  );
};

export default QuizSolution;
