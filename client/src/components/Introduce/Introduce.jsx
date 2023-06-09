import useGetFetch from "../../hooks/useGetFetch";
import { API_BASE_URL, API_PORT } from "../../constants/api";
import WordCloud from "./WordCloud";
import styles from "./Introduce.module.css";

const Introduce = () => {
  const url = `http://${API_BASE_URL}:${API_PORT}/complaints`;
  const { data, isLoading, error } = useGetFetch(url);

  if (error) {
    console.log("에러발생:", error);
  }

  if (isLoading) {
    return <div>로딩중</div>;
  }
  return (
    <div className={styles.wholeContainer}>
      {data && <WordCloud resData={data} />}
    </div>
  );
};

export default Introduce;
