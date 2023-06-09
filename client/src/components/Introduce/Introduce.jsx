import useGetFetch from "../../hooks/useGetFetch";
import { API_BASE_URL, API_PORT } from "../../constants/api";
import WordCloud from "./WordCloud";
import styles from "./Introduce.module.css";
import Spinner from "../../utils/Spinner";

const Introduce = () => {
  const url = `http://${API_BASE_URL}:${API_PORT}/complaints`;
  const { data, isLoading, error } = useGetFetch(url);

  if (error) {
    console.log("에러발생:", error);
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className={styles.wholeContainer}>
      {Array.isArray(data) && data.length > 0 && <WordCloud resData={data} />}
    </div>
  );
};

export default Introduce;
