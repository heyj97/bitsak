import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";
import SideList from "./SideList";
import SideMenuFeed from "./SideMenuFeed";
import { useState } from "react";

const SideMenu = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log(data);
  return (
    <>
      <div className={styles.sideMenuContainer}>
        {!isSelected && <SideList setIsSelected={setIsSelected} data={data} />}
        {isSelected && (
          <SideMenuFeed data={data} setIsSelected={setIsSelected} />
        )}
      </div>
      {/* 사이드메뉴 컨테이너-------------------------------- */}
    </>
  );
};

export default SideMenu;
