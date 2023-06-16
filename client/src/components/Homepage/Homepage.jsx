// 담당: 정주현

import styles from "./Homepage.module.css";
import MenuItem from "./MenuItem";

const Homepage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homepageFlexContainer}>
        <MenuItem
          title="빛공해 소개"
          url="introduce"
          desc="빛공해에 대해 알아봅시다."
        />
        <MenuItem
          title="빛공해 퀴즈"
          url="quiz"
          desc="빛공해에 대해 얼마나 알고있나요?"
        />
        <MenuItem
          title="빛공해 갤러리"
          url="map"
          desc="빛공해를 공유해봅시다"
        />
      </div>
    </div>
  );
};

export default Homepage;
