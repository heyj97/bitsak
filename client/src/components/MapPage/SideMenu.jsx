import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";
import SideList from "./SideList";
import SideMenuFeed from "./SideMenuFeed";
import { useState } from "react";

const SideMenu = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <div className={styles.sideMenuContainer}>
        {!isSelected && <SideList setIsSelected={setIsSelected} />}
        {isSelected && <SideMenuFeed setIsSelected={setIsSelected} />}
      </div>
      {/* 사이드메뉴 컨테이너-------------------------------- */}
    </>
  );
};

export default SideMenu;
