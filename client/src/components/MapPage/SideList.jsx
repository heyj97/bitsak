import { IMG_BASE_URL } from "../../constants/api";
import styles from "./MapPage.module.css";

const SideList = ({ setIsSelected, data, setSelectedId }) => {
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
            <button>글쓰기</button>
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
          <div className={styles.location}>
            <div>No.{data.gallery_id}  </div>
            <div>{data.location}</div>
          </div>
          <div className={styles.takeDate}>
            <div>
              찍은 날짜: {data.take_date} <br /> 게시 날짜: {data.post_date}
            </div>
            <div></div>
          </div>
          <div className={styles.userName}>
            <div>{data.username || "익명"}</div>
            <div></div>
          </div>
          <div className={styles.description}>
            <div>{data.description}</div>
            <div></div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SideList;
