/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
// 담당: 김한빈

import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.body}>
      <nav className={styles.header}>
        <h1 className={styles.headerspan}>빛삭</h1>
        <ul className={styles.headerUl}>
          <li>
            <Link to="/infor">소개</Link>
          </li>
          <li>
            <Link to="/quize">퀴즈</Link>
          </li>
          <li>
            <Link to="/map">지도</Link>
          </li>
        </ul>
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
