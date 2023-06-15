import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";


const SideMenu = () => {

  

  return (
    <>
      <div className={styles.sideMenuFeedContainer}>
        {/* 컨테이너 Header------------------------------------- */}
        <div className={styles.Header}>
          <h2>빛공해 사례 목록</h2>
        </div>

        {/* 컨테이너 Content------------------------------------- */}
        <div className={styles.ContentView}>

          <div className={styles.ContentOverView}>
          
            <Link to="/">
              {/* 게시물 리스트 1set--- */}
              <div className={styles.ListSet}>
                <div className={styles.ListImg}></div>
                <div className={styles.ListContents}>
                  <div className={styles.location}>
                    <div>위치</div><div></div>
                  </div>
                  <div className={styles.takeDate}>
                    <div>날짜</div><div></div>
                  </div>
                  <div className={styles.userName}>
                    <div>작성자</div><div></div>
                  </div>
                  <div className={styles.description}>
                    <div>내용</div><div></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

        {/* 컨테이너 Footer------------------------------------- */}
        <div className={styles.Footer}>
          <div>
            <button>글쓰기</button>
          </div>
        </div>

        </div>{/* 컨테이너 제목------------------------------------- */}
      </div>{/* 사이드메뉴 컨테이너-------------------------------- */}
    </>
  );
};

export default SideMenu;

// const dummyData = [
//   {
//     username: '익명',
//     description: '빛공해 사례 설명',
//     location: '서울시 서대문구 00동 123-4',
//     takeDate: '2023-01-01',
//   },
// ]