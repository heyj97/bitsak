import { useEffect, useState } from "react";

import styles from "./Quiz.module.css";

const AnswerForm = ({ answer, userChoice, setUserChoice }) => {
  const handleClick = (boolean) => {
    if (boolean === answer) {
      let arr = [...userChoice];
      arr.push("Correct");
      setUserChoice(arr);
    }
  };
  return (
    <div className={styles.answerContainer}>
      <div
        className={styles.answerBox}
        onClick={(e) => {
          handleClick(true);
        }}
      >
        <h4>O</h4>
      </div>
      <div
        className={styles.answerBox}
        onClick={(e) => {
          handleClick(false);
        }}
      >
        <h4>X</h4>
      </div>
    </div>
  );
};

export default AnswerForm;
