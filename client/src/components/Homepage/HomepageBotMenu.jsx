// 담당: 정주현

import styles from "./Homepage.module.css";
import MenuItem from "./MenuItem";
import MenuItemBlur from "./MenuItemBlur";

const HomepageBotMenu = () => {
  return (
    <>
        {/* <div className={styles.menuBox}>
          <MenuItem title="빛공해란?" url="/" desc="메뉴에 대한 간략한 설명" />
          <MenuItem title="빛공해 인식검사" url="/" desc="메뉴에 대한 간략한 설명" />
          <MenuItem title="빛공해 지도" url="/" desc="메뉴에 대한 간략한 설명" />
        </div> */}
        <div className={styles.menuBox}>
          <MenuItemBlur title="빛공해란?" url="/" desc="메뉴에 대한 간략한 설명" />
          <MenuItemBlur title="빛공해 인식검사" url="/" desc="메뉴에 대한 간략한 설명" />
          <MenuItemBlur title="빛공해 지도" url="/" desc="메뉴에 대한 간략한 설명" />
        </div>
    </>
  );
};

export default HomepageBotMenu;
