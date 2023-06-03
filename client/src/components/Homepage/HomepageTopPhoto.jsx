// 담당: 정주현

import bgImg from "/Homepage/seoul_night.jpg";
import bgImg2 from "/Homepage/star_bg.png";
import styles from "./Homepage.module.css";
const TopPhoto = () => {
  return (
    <>
      <div className={styles.imgCover}>
        <div className={styles.poemBox}>
          <h2 className={styles.poemTitle}>별 헤는 밤</h2>
          <p className={styles.poemDesc}>
            별 하나에 추억과
            <br />
            별 하나에 사랑과
            <br />
            별 하나에 쓸쓸함과
            <br />
            별 하나에 동경과
            <br />
            별 하나에 시와
            <br />별 하나에 어머니, 어머니,
          </p>
        </div>
      </div>
      <img src={bgImg2} className={styles.backgroundImg} alt="background img" />
    </>
  );
};

export default TopPhoto;
