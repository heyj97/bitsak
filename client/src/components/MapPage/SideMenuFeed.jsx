import { useState } from "react";
import { API_BASE_URL } from "../../constants/api";
import styles from "./MapPage.module.css";

const PasswordCheck = ({ selectedItemId }) => {
  const [checkPW, setCheckPW] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://${API_BASE_URL}/api/gallery/delete`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            galleryId: selectedItemId,
            password: checkPW,
          }),
        }
      );

      if (response.ok) {
        // Successful deletion
        const responseData = await response.json();
        setIsSelected(false);
        // Reset the password field
        setCheckPW("");
      } else {
        // Handle error
        console.error("삭제에 실패했습니다.");
      }
    } catch (error) {
      console.error("삭제에 실패했습니다.", error);
    }

    window.location.reload();
    return;
  };

  return (
    <div className={styles.pwcheck}>
      <input
        type="password"
        value={checkPW}
        onChange={(e) => setCheckPW(e.target.value)}
        placeholder="비밀번호를 입력해주세요."
      />
      <button
        type="submit"
        onClick={handleSubmit}
        style={{
          width: "100px",
          height: "33px",
          margin: "0",
          marginTop: "25px",
          marginLeft: "15px",
          cursor: "pointer",
          border: "#ccc 1px solid",
          fontSize: "15px",
          borderRadius: "20px",
        }}
      >
        확인
      </button>
    </div>
  );
};
const SideMenuFeed = ({
  data,
  setIsSelected,
  selectedId,
  setIsEdit,
  setEditData,
  setIsPost,
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const selectedItem = data.find((item) => item.gallery_id === selectedId);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModify = () => {
    let newdata = { ...selectedItem };
    setEditData(newdata);
    setIsEdit(true);
    setIsPost(false);
    setIsSelected(false);
  };

  const handleDelete = () => {
    setIsDelete(!isDelete);
  };

  const modalContentStyles = {
    display: "block",
    maxWidth: "90%",
    maxHeight: "90%",
    objectFit: "contain",
  };

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
              <div className={styles.FeedImgDiv}>
                <img
                  className={styles.FeedImg}
                  src={`http://${API_BASE_URL}${selectedItem?.file_path}`}
                  onClick={() =>
                    handleClickOpen(
                      `http://${API_BASE_URL}${selectedItem?.file_path}`
                    )
                  }
                />
                {isOpen && (
                  <div className={styles.modal}>
                    <span className={styles.close} onClick={handleClose}>
                      &times;
                    </span>
                    <img
                      style={modalContentStyles}
                      src={selectedImage}
                      alt={`${selectedId.file_path}`}
                    />
                  </div>
                )}
              </div>
              <div className={styles.FeedContents}>
                <div className={styles.FeedUserName}>
                  <div className={styles.figure}>
                    <div className={styles.InfName}>작성자</div>
                    <div>{selectedItem?.username}</div>
                  </div>
                  <div className={styles.FeedTakeDate}>
                    <div className={styles.InfName}>등록일</div>
                    <div style={{ width: "150px" }}>
                      {selectedItem?.take_date &&
                        selectedItem?.take_date.split("T")[0]}
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
                  {isDelete && (
                    <PasswordCheck selectedItemId={selectedItem.gallery_id} />
                  )}
                  <button onClick={handleModify}>수정</button>
                  <button onClick={handleDelete}>삭제</button>
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
