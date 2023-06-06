import { useSearchParams } from "react-router-dom";
const QuizResult = () => {
  const [searchParams] = useSearchParams();
  const paramName = searchParams.get("correctCount");
  return <div>당신은 천재? 총 {paramName}개 정답입니다.</div>;
};

export default QuizResult;
