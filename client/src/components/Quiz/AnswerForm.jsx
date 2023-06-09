import styles from "./Quiz.module.css";

const AnswerForm = ({
  answer,
  correctCount,
  setCorrectCount,
  correctIdx,
  setCorrectIdx,
  answerIdx,
  quizNum,
  setQuizNum,
}) => {
  const handleClick = (boolean) => {
    if (boolean == answer) {
      let newArr = [...correctIdx];
      newArr.push(answerIdx);
      setCorrectIdx(newArr);
      setCorrectCount(correctCount + 1);
    }
    setQuizNum(quizNum + 1);
  };
  return (
    <div className={styles.answerContainer}>
      <div
        className={styles.answerBox}
        onClick={() => {
          handleClick(true);
        }}
      >
        <h4>O</h4>
      </div>
      <div
        className={styles.answerBox}
        onClick={() => {
          handleClick(false);
        }}
      >
        <h4>X</h4>
      </div>
    </div>
  );
};

export default AnswerForm;
