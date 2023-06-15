import { IMG_BASE_URL } from "../../constants/api";
import styles from "./MapPage.module.css";
import { Link } from "react-router-dom";

const SideMenuFeed = ({ data, setIsSelected, selectedId }) => {
  const selectedItem = data.find(item => item.gallery_id === selectedId);
  console.log(selectedItem)
  return (
    <>
      <div className={styles.sideMenuFeedContainer}>
        <div className={styles.ContentView}>
          <div className={styles.ContentOverView}>
            <button
              onClick={() => setIsSelected(false)}
              style={{ cursor: "pointer", border: "none", marginLeft: "10px" }}
            >
              뒤로가기
            </button>
            {/* 게시물 리스트 1set--- */}
            <div className={styles.ListSet}>
              <div className={styles.ListImg}>
                <img src={`http://${IMG_BASE_URL}${selectedItem.file_path}`} alt={`${selectedItem.location}${selectedItem.file_path}`}/>
              </div>
              <div className={styles.ListContents}>
                <div className={styles.location}>
                  <div>{selectedItem.location}</div>
                  <div></div>
                </div>
                <div className={styles.takeDate}>
                  <div>찍은 날짜: {selectedItem.take_date}<br/>포스팅 날짜: {selectedItem.post_date}</div>
                  <div></div>
                </div>
                <div className={styles.userName}>
                  <div>{selectedItem.username}</div>
                  <div></div>
                </div>
                <div className={styles.description}>
                  <div>{selectedItem.description}</div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenuFeed;
