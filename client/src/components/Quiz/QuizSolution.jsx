const QuizSolution = ({ quizData }) => {
  return (
    <ul>
      {quizData.map((quiz, idx) => {
        return (
          <QuizSolutionItem
            q={quiz.question}
            a={quiz.answer}
            d={quiz.description}
            key={idx}
          />
        );
      })}
    </ul>
  );
};

const QuizSolutionItem = ({ q, a, d }) => {
  const boolToOX = (bool) => {
    if (bool) return "O";
    if (!bool) return "X";
  };
  return (
    <li>
      <h3>
        {q} {`(${boolToOX(a)})`}
      </h3>
      <p>{d}</p>
    </li>
  );
};

export default QuizSolution;
6;
