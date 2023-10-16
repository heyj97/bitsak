import styles from "./Introduce.module.css";
import WordCloud from "./WordCloud";
import Spinner from "../common/Spinner/Spinner";
import Error from "../common/Error/Error";

import useGetFetch from "../../hooks/useGetFetch";

const YearlyComplaints = () => {
  const { data, isLoading, error } = useGetFetch("complaints");

  if (error)
    return (
      <div>
        <Error />
      </div>
    );
  return (
    <>
      <div>
        <h2 className={styles.ChartTitle}>
          지난 1년 동안 가장 많이 발생한
          <br /> 빛공해 관련 민원 연관어
        </h2>
        <h4 className={styles.ChartParagraph}>2023.06.01 기준</h4>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        Array.isArray(data) && data.length > 0 && <WordCloud resData={data} />
      )}
      <p className={styles.ChartParagraph}>
        <a
          href="https://www.data.go.kr/data/15101903/openapi.do"
          target="_blank"
        >
          공공데이터 포털 : 국민권익위원회_민원빅데이터_분석정보_API_2022
        </a>
      </p>
    </>
  );
};

export default YearlyComplaints;
