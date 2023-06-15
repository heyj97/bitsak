import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";

const SideMenuFeed = ({ setIsSelected }) => {
  return (
    <>
      <div className={styles.sideMenuFeedContainer}>
        {/* 컨테이너 Content------------------------------------- */}
        <div className={styles.FeedContentView}>
          <div className={styles.FeedContentOverView}>
            <button
              onClick={() => setIsSelected(false)}
              style={{ cursor: "pointer" }}
            >
              ←
            </button>
            {/* 게시물 리스트 1set--- */}
            <div className={styles.FeedSet}>
              <div className={styles.FeedImg}></div>
              <div className={styles.FeedContents}>
                <div className={styles.FeedUserName}>
                  <div className={styles.figure}>
                    <div className={styles.InfName}>작성자</div>
                    <div>익명</div>
                  </div>
                    <div className={styles.FeedTakeDate}>
                      <div className={styles.InfName}>등록일</div>
                      <div>2023-12-12</div>
                    </div>
                </div>

                
                <div className={styles.FeedLocation}>
                  <div className={styles.InfName}>위치</div>
                  <div>서울시 서대문구 연희로32길 51</div>
                </div>
                
                <div className={styles.FeedDescription}>
                  <div className={styles.InfName}>내용</div>
                  <div>빛공해게시물내용</div>
                </div>
              </div>
              <div className={styles.FeedFooter}>
                <div>
                  <button>수정</button>
                  <button>삭제</button>
                  <button>글쓰기</button>
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
