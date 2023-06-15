import styles from "./MapPage.module.css";

const SideList = ({ setIsSelected, data }) => {
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
                <ListItem setIsSelected={setIsSelected} data={item} key={idx} />
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

const ListItem = ({ setIsSelected, data }) => {
  return (
    <button onClick={() => setIsSelected(true)} className={styles.listItem}>
      {/* 게시물 리스트 1set--- */}
      <div className={styles.ListSet}>
        <div className={styles.ListImg}></div>
        <div className={styles.ListContents}>
          <div className={styles.location}>
            <div>{data.location}</div>
            <div></div>
          </div>
          <div className={styles.takeDate}>
            <div>
              찍은 날짜: {data.take_date} <br /> 게시 날짜: {data.post_date}
            </div>
            <div></div>
          </div>
          <div className={styles.userName}>
            <div>{data.name || "익명"}</div>
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
