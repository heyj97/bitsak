import { Link } from "react-router-dom";

const QuizHome = () => {
  return (
    <div>
      <h2>Quiz 홈페이지 입니다.</h2>
      <Link to="/quiz">시작하기</Link>
    </div>
  );
};

export default QuizHome;
