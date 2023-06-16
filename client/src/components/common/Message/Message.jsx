import styles from "../Error/Error.module.css";
import { useNavigate } from "react-router-dom";
const Message = ({ message, toWhere }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(toWhere);
  };
  return (
    <div className={styles.errorBackground}>
      <div className={styles.errorContainer}>
        <h2>알림</h2>
        <h3>{message}</h3>
        <button onClick={handleClick}>확인</button>
      </div>
    </div>
  );
};

export default Message;
