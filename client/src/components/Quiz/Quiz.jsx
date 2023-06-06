import { useEffect, useState } from "react";

const Quiz = () => {
  const [userChoice, setUserChoice] = useState([]);

  useEffect(() => {
    console.log(userChoice);
  }, [userChoice]);

  return (
    <>
      <QuizForm
        quizNum={"1"}
        quiz={
          "바다거북과 철새 등 조류는 빛공해에 심각한 피해를 입는 대표적인 야생동물이다"
        }
        answer={true}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    </>
  );
};

export default Quiz;
