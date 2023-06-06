// 담당: 정주현

import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, url, desc }) => {
  const navigate = useNavigate();

  const handleClick = (param) => {
    navigate(`/${param}`);
  };

  return (
    <>
      <button
        className={styles.menuBox}
        onClick={() => {
          handleClick(url);
        }}
      >
        <h3 className={styles.menuTitle}>{title}</h3>
        <h4 className={styles.menuDesc}>{desc}</h4>
      </button>
    </>
  );
};

export default MenuItem;
