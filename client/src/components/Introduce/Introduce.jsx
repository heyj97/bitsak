import useGetFetch from "../../hooks/useGetFetch";
import WordCloud from "./WordCloud";
import styles from "./Introduce.module.css";
import Spinner from "../common/Spinner/Spinner";
import GlobalLightPollutionChart from "./GlobalLightPollutionChart";
import Error from "../common/Error/Error";

const Introduce = () => {
  const { data, isLoading, error } = useGetFetch("complaints");

  if (error)
    return (
      <div>
        <Error />
      </div>
    );
  return (
    <div className={styles.wholeContainer}>
      <GlobalLightPollutionChart />
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
    </div>
  );
};

export default Introduce;
