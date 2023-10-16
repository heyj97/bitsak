// 담당: 정주현

import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, url, desc }) => {
  const navigate = useNavigate();

  const handleClick = (param) => {
    navigate(`/${param}`);
  };
  const style = { backgroundImage: `url("/Homepage/${url}.webp")` };

  return (
    <>
      <button
        className={styles.menuBox}
        onClick={() => {
          handleClick(url);
        }}
        style={style}
      >
        <div className={styles.menuCover}>
          <h3 className={styles.menuTitle}>{title}</h3>
          <h4 className={styles.menuDesc}>{desc}</h4>
        </div>
      </button>
    </>
  );
};

export default MenuItem;
