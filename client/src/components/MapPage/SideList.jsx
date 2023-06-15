import styles from "./MapPage.module.css";
import { useState } from 'react';
import CreateFeedModal from './Modals/CreateFeedModal';
import { IMG_BASE_URL } from "../../constants/api";
const SideList = ({ setIsSelected, data, setSelectedId }) => {
  
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className={styles.Header}>
        <h2>빛공해 사례 목록</h2>
      </div>

      {/* 컨테이너 Content------------------------------------- */}
      <div className={styles.ContentView}>
        <div className={styles.ContentOverView}>
          {data &&
            data.map((item, idx) => {
              return (
                <ListItem setIsSelected={setIsSelected} data={item} key={idx} setSelectedId={setSelectedId} />
              );
            })}
        </div>

        {/* 컨테이너 Footer------------------------------------- */}
        <div className={styles.Footer}>
          <div>
            <button onClick={showModal}>글쓰기</button>
            {modalOpen && <CreateFeedModal setModalOpen={setModalOpen} />}
          </div>
        </div>
      </div>
      {/* 컨테이너 제목------------------------------------- */}
    </>
  );
};

const ListItem = ({ setIsSelected, data, setSelectedId }) => {
  return (
    <button onClick={() => {
      setSelectedId(data.gallery_id)
      setIsSelected(true)
      }} className={styles.listItem}>
      {/* 게시물 리스트 1set--- */}
      <div className={styles.ListSet}>
        <div className={styles.ListImg}>
          <img src={`http://localhost:5001${data.file_path}`} alt={`${data.location}${data.file_path}`}/>
        </div>
        <div className={styles.ListContents}>
          <div className={styles.userName}>
            <div className={styles.InfName}>작성자</div>
            <div>ㅁㅇㅀㄴㅀ</div>
          </div>
          <div className={styles.takeDate}>
            <div className={styles.InfName}>등록일</div>
            <div>ㄴㅇㅀㄴㅇㅀㄴㅇㅀ</div>
          </div>
          <div className={styles.location}>
            <div className={styles.InfName}>위치</div>
            <div>ㄴㅇㅀㄴㅇㅀㄴㅇㅀㄴㅇㅀ</div>
          </div>
          <div className={styles.description}>
            <div className={styles.InfName}>내용</div>
            <div>ㄴㅇㅀㄴㅇㅀㄴㅇㅀ</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SideList;
