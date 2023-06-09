import styles from "./Quiz.module.css";

const QuizSolution = ({ quizData, correctIdx }) => {
  return (
    <ul className={styles.quizSolutionUl}>
      {quizData &&
        quizData.map((quiz, idx) => {
          return (
            <QuizSolutionItem
              correctIdx={correctIdx}
              i={quiz.question_id}
              q={quiz.question}
              a={quiz.answer}
              d={quiz.explanation}
              key={idx}
            />
          );
        })}
    </ul>
  );
};

const QuizSolutionItem = ({ correctIdx, i, q, a, d }) => {
  const boolToOX = (bool) => {
    if (bool) return "O";
    if (!bool) return "X";
  };
  return (
    <li
      className={
        correctIdx.includes(i)
          ? styles.quizSolutionUlTrue
          : styles.quizSolutionUlFalse
      }
    >
      <h3>
        {boolToOX(a)}. {q}
      </h3>
      <p>{d}</p>
    </li>
  );
};

export default QuizSolution;
