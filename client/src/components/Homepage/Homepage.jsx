// 담당: 정주현

import styles from "./Homepage.module.css";
import MenuItem from "./MenuItem";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeImgFrame}></div>
      <div className={styles.homepageFlexContainer}>
        <MenuItem
          title="빛공해 소개"
          url="introduce"
          desc="빛공해에 대해서 알고 계시나요?"
        />
        <MenuItem
          title="빛공해 퀴즈"
          url="quiz-home"
          desc="빛공해 관련된 퀴즈를 풀어봅시다."
        />
        <MenuItem
          title="빛공해 갤러리"
          url="gallery"
          desc="빛공해를 사진을 통해 알아봅시다."
        />
      </div>
    </div>
  );
};

export default HomePage;
