import styles from "./MapPage.module.css";
import { IMG_BASE_URL } from "../../constants/api";
const SideList = ({ setIsSelected, data, setSelectedId, setIsPost }) => {
  return (
    <>
      <div className={styles.Header}>
        <h2 style={{ display: "inline-block" }}>빛공해 사례 목록</h2>{" "}
        <button
          onClick={() => {
            setIsPost(true);
            setIsSelected(false);
          }}
        >
          글쓰기
        </button>
      </div>

      {/* 컨테이너 Content------------------------------------- */}
      <div className={styles.ContentView}>
        <div className={styles.ContentOverView}>
          {data &&
            data.map((item, idx) => {
              return (
                <ListItem
                  setIsSelected={setIsSelected}
                  data={item}
                  key={idx.toString()}
                  setSelectedId={setSelectedId}
                />
              );
            })}
        </div>

        {/* 컨테이너 Footer------------------------------------- */}
      </div>
      {/* 컨테이너 제목------------------------------------- */}
    </>
  );
};

const ListItem = ({ setIsSelected, data, setSelectedId }) => {
  return (
    <button
      onClick={() => {
        setSelectedId(data.gallery_id);
        setIsSelected(true);
      }}
      className={styles.listItem}
    >
      {/* 게시물 리스트 1set--- */}
      <div className={styles.ListSet}>
        <div className={styles.ListImg}>
          <img
            src={`http://${IMG_BASE_URL}${data.file_path}`}
            alt={`${data.location}${data.file_path}`}
          />
        </div>
        <div className={styles.ListContents}>
          <div className={styles.userName}>
            <div className={styles.InfName}>작성자</div>
            <div>{data.username}</div>
          </div>
          <div className={styles.takeDate}>
            <div className={styles.InfName}>촬영일</div>
            <div>{data.take_date && data.take_date.split("T")[0]}</div>
          </div>
          <div className={styles.takeDate}>
            <div className={styles.InfName}>등록일</div>
            <div>{data.post_date && data.post_date.split("T")[0]}</div>
          </div>
          <div className={styles.location}>
            <div className={styles.InfName}>위치</div>
            <div>{data.location}</div>
          </div>
          <div className={styles.description}>
            <div className={styles.InfName}>내용</div>
            <div>{data.description}</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default SideList;
