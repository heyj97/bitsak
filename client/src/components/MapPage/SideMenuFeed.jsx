import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";

const SideMenuFeed = ({ setIsSelected }) => {
  return (
    <>
      <div className={styles.sideMenuFeedContainer}>
        {/* 컨테이너 Content------------------------------------- */}
        <div className={styles.ContentView}>
          <div className={styles.ContentOverView}>
            <button
              onClick={() => setIsSelected(false)}
              style={{ cursor: "pointer" }}
            >
              뒤로가기
            </button>
            {/* 게시물 리스트 1set--- */}
            <div className={styles.ListSet}>
              <div className={styles.ListImg}></div>
              <div className={styles.ListContents}>
                <div className={styles.location}>
                  <div>teskljtskjl</div>
                  <div></div>
                </div>
                <div className={styles.takeDate}>
                  <div>ㅁㅇ나ㅣㅓ랑ㄴ미ㅓㄹㅇㅁㄴ</div>
                  <div></div>
                </div>
                <div className={styles.userName}>
                  <div>ㅁㄴㅇㄻㄹㄴ</div>
                  <div></div>
                </div>
                <div className={styles.description}>
                  <div>ㄴㅇㄻㅇㄹㄴㅇ</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 컨테이너 제목------------------------------------- */}
      </div>
      {/* 사이드메뉴 컨테이너-------------------------------- */}
    </>
  );
};

export default SideMenuFeed;
