import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";
import SideList from "./SideList";
import SideMenuFeed from "./SideMenuFeed";
import { useState } from "react";

const SideMenu = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <div className={styles.sideMenuContainer}>
        {!isSelected && <SideList setIsSelected={setIsSelected} data={data} setSelectedId={setSelectedId} />}
        {isSelected && (
          <SideMenuFeed data={data} setIsSelected={setIsSelected} selectedId={selectedId} />
        )}
      </div>
      {/* 사이드메뉴 컨테이너-------------------------------- */}
    </>
  );
};

export default SideMenu;
