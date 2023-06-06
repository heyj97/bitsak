import { useSearchParams, Link } from "react-router-dom";
import countToResult from "../../utils/countToResult";

const QuizResult = () => {
  const [searchParams] = useSearchParams();
  const correctCount = searchParams.get("correctCount");

  const data = countToResult(correctCount);

  return (
    <>
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <Link to="/introduce">빛공해에 대해 더 알아보기</Link>
        <Link to="/gallery">빛공해 지도 보러가기</Link>
      </div>
    </>
  );
};

export default QuizResult;
