import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";
import SideList from "./SideList";
import SideMenuFeed from "./SideMenuFeed";
import SideMenuWrite from "./SideMenuWrite";
import { useState } from "react";

const SideMenu = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  console.log(isPost, isSelected);
  return (
    <>
      <div className={styles.sideMenuContainer}>
        {!isSelected && !isPost && (
          <SideList
            setIsSelected={setIsSelected}
            setIsPost={setIsPost}
            data={data}
            setSelectedId={setSelectedId}
          />
        )}
        {isSelected && !isPost && (
          <SideMenuFeed
            data={data}
            setIsSelected={setIsSelected}
            selectedId={selectedId}
          />
        )}
        {isPost && !isSelected && (
          <SideMenuWrite setIsSelected={setIsSelected} setIsPost={setIsPost} />
        )}
      </div>
      {/* 사이드메뉴 컨테이너-------------------------------- */}
    </>
  );
};

export default SideMenu;
