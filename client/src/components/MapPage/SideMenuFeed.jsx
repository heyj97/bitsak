import { IMG_BASE_URL } from "../../constants/api";
import styles from "./MapPage.module.css";
import { useState } from "react";
import CreateFeedModal from "./Modals/CreateFeedModal";

const SideMenuFeed = ({ data, setIsSelected, selectedId }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  const selectedItem = data.find((item) => item.gallery_id === selectedId);
  console.log(selectedItem);
  return (
    <>
      <div className={styles.sideMenuFeedContainer}>
        {/* 컨테이너 Content------------------------------------- */}
        <div className={styles.FeedContentView}>
          <div className={styles.FeedContentOverView}>
            <button
              onClick={() => setIsSelected(false)}
              style={{ cursor: "pointer", border: "none", marginLeft: "10px" }}
            >
              ←
            </button>
            {/* 게시물 리스트 1set--- */}
            <div className={styles.FeedSet}>
              <div className={styles.FeedImg}>
                <img src={`http://${IMG_BASE_URL}${selectedItem?.file_path}`} />
              </div>
              <div className={styles.FeedContents}>
                <div className={styles.FeedUserName}>
                  <div className={styles.figure}>
                    <div className={styles.InfName}>작성자</div>
                    <div>{selectedItem?.username}</div>
                  </div>
                  <div className={styles.FeedTakeDate}>
                    <div className={styles.InfName}>등록일</div>
                    <div>
                      {selectedItem.post_date &&
                        selectedItem.post_date.split("T")[0]}
                    </div>
                  </div>
                </div>

                <div className={styles.FeedLocation}>
                  <div className={styles.InfName}>위치</div>
                  <div>{selectedItem?.location}</div>
                </div>

                <div className={styles.FeedDescription}>
                  <div className={styles.InfName}>내용</div>
                  <div>{selectedItem?.description}</div>
                </div>
              </div>
              <div className={styles.FeedFooter}>
                <div>
                  <button>수정</button>
                  <button>삭제</button>
                  <button onClick={showModal}>글쓰기</button>
                  {modalOpen && <CreateFeedModal setModalOpen={setModalOpen} />}
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
