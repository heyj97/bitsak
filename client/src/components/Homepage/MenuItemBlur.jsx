// 담당: 정주현

import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";

const MenuItemBlur = ({ title, url, desc }) => {
  return (
    <>
      <div className={styles.menuBox}>
        <Link to={url} className={styles.linkBtnBlur}>
          <div className={styles.menuContents}>
            <h3 className={styles.menuTitle}>{title}</h3>
            <h4 className={styles.menuDesc}>{desc}</h4>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuItemBlur;
