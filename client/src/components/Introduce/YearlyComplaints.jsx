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
      <div className={styles.wordCloudBox}>
        <div className={styles.wordCloudTitle}>
          <h2>1년 동안 가장 많이 발생한 빛공해 관련 민원</h2>
          <h4>2023.06.01 기준</h4>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          Array.isArray(data) && data.length > 0 && <WordCloud resData={data} />
        )}
      </div>
    </>
  );
};

export default YearlyComplaints;
