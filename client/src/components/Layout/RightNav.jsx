import { Link, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import { useMemo } from "react";
const RightNav = () => {
  const location = useLocation();
  const isIntro = useMemo(() => location.pathname === "/introduce", [location]);
  const isQuiz = useMemo(() => location.pathname === "/quiz", [location]);
  return (
    <>
      <ul className={styles.navRight}>
        {!isIntro && (
          <li>
            <Link to={"/introduce"}>빛공해 소개</Link>
          </li>
        )}
        {!isQuiz && (
          <li>
            <Link to={"/quiz"}>빛공해 퀴즈</Link>
          </li>
        )}
        {(isQuiz || isIntro) && (
          <li>
            <Link to={"/map"}>빛공해 제보</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default RightNav;
