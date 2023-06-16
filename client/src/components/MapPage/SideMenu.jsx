import styles from "./MapPage.module.css";
import SideList from "./SideList";
import SideMenuFeed from "./SideMenuFeed";
import SideMenuModify from "./SideMenuModify";
import SideMenuWrite from "./SideMenuWrite";
import { useEffect, useState } from "react";

const SideMenu = ({ data }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log(isEdit, editData, isSelected, isPost);
  }, []);

  return (
    <>
      <div className={styles.sideMenuContainer}>
        {!isSelected && !isEdit && !isPost && (
          <SideList
            setIsSelected={setIsSelected}
            setIsPost={setIsPost}
            data={data}
            setSelectedId={setSelectedId}
          />
        )}
        {isSelected && !isPost && !isEdit && (
          <SideMenuFeed
            data={data}
            setIsSelected={setIsSelected}
            selectedId={selectedId}
            setIsEdit={setIsEdit}
            setIsPost={setIsPost}
            setEditData={setEditData}
          />
        )}
        {isPost && !isSelected && !isEdit && (
          <SideMenuWrite
            setIsPost={setIsPost}
            setIsSelected={setIsSelected}
            isPost={isPost}
            editData={editData}
          />
        )}
        {isEdit && !isSelected && !isPost && (
          <SideMenuModify
            editData={editData}
            setIsEdit={setIsEdit}
            setIsPost={setIsPost}
            setIsSelected={setIsSelected}
          />
        )}
      </div>
      {/* 사이드메뉴 컨테이너-------------------------------- */}
    </>
  );
};

export default SideMenu;
