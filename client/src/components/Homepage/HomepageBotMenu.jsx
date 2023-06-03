// 담당: 정주현

import styles from "./Homepage.module.css";
import MenuItem from "./MenuItem";

const HomepageBotMenu = () => {
  return (
    <>
      <div className={styles.menuBox}>
        <MenuItem title="메뉴이름" url="/" desc="메뉴에 대한 간략한 설명" />
        <MenuItem title="메뉴이름" url="/" desc="메뉴에 대한 간략한 설명" />
        <MenuItem title="메뉴이름" url="/" desc="메뉴에 대한 간략한 설명" />
      </div>
    </>
  );
};

export default HomepageBotMenu;
