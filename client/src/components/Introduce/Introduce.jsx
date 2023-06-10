import useGetFetch from "../../hooks/useGetFetch";
import { API_BASE_URL, API_PORT } from "../../constants/api";
import WordCloud from "./WordCloud";
import styles from "./Introduce.module.css";
import Spinner from "../../utils/Spinner/Spinner";
import GlobalLightPollutionChart from "./GlobalLightPollutionChart";

const Introduce = () => {
  // const url = `http://${API_BASE_URL}:${API_PORT}/complaints`;
  // const { data, isLoading, error } = useGetFetch(url);

  // if (error) {
  //   console.log("에러발생:", error);
  // }

  return (
    <div className={styles.wholeContainer}>
      <GlobalLightPollutionChart />
      {/* <div className={styles.wordCloudBox}>
      <div className={styles.wordCloudTitle}>
        <h2>1년 동안 가장 많이 발생한 빛공해 관련 민원</h2>
        <h4>2023.06.01 기준</h4>
      </div>
      {isLoading ? <Spinner /> : Array.isArray(data) && data.length > 0 && <WordCloud resData={data} />}
      </div> */}
    </div>
  );
};

export default Introduce;
