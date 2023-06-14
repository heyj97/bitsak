/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
// 담당: 김한빈

import styles from "./Layout.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
        <div className={styles.Logo}>
          <Link to="/">
            <h1>빛삭</h1>
          </Link>
        </div>
        <div className={styles.MenuBox}>
          <Link to="/infor">
            <h2>소개</h2>
          </Link>
          <Link to="/quiz-home">
            <h2>퀴즈</h2>
          </Link>
          <Link to="/map">
            <h2>지도</h2>
          </Link>
        </div>
      </nav>
    </header>
    // <div>
    //   <div>
    //
    //     </span>
    //   </div>
    // </div>
  );
};

export default Header;
