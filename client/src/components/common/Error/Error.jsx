import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";
const Error = ({ error }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className={styles.errorBackground}>
      <div className={styles.errorContainer}>
        <h2>오류발생</h2>
        <h3>오류가 발생했습니다. 다시 시도해주세요.</h3>
        <p>상세{error}</p>
        <button onClick={handleClick}>확인</button>
      </div>
    </div>
  );
};

export default Error;
