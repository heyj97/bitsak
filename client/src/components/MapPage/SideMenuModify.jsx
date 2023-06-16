import styles from "./MapPage.module.css";
import { useState, useEffect } from "react";
import usePutFetch from "../../hooks/usePutFetch"; // Changed from usePostFetch

const SideMenuModify = ({ setIsPost, setIsEdit, setIsSelected, editData }) => {
  const [file, setFile] = useState(editData.file_path);
  const [description, setDescription] = useState(editData.description);
  const [location, setLocation] = useState(editData.location);
  const [takeDate, setTakeDate] = useState(editData.post_date);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(editData.username);
  const [galleryId, setGalleryId] = useState(parseInt(editData.gallery_id));
  const [postData, setPostData] = useState(null);
  const { data, isLoading, error } = usePutFetch(
    // Changed from usePostFetch
    "gallery",
    postData
  );

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 비밀번호 길이 검사
    if (password.length < 4) {
      alert("비밀번호는 4글자 이상이어야 합니다.");
      return;
    }

    // 촬영날짜, 위치, 파일 빈값 검사
    if (!takeDate || !location || !file || !description) {
      alert("촬영날짜, 위치, 내용, 파일은 필수 항목입니다.");
      return;
    }

    // 닉네임 빈값 처리
    if (!username) {
      setUsername("익명");
    }

    const formData = new FormData();
    formData.append("description", description);
    formData.append("location", location);
    formData.append("take_date", takeDate);
    formData.append("galleryId", galleryId);
    formData.append("password", password); // Add password to the form data
    formData.append("file_path", file);
    setPostData(formData);
    for (let [key, value] of formData.entries()) {
      console.log(key, value, typeof key);
    }
  };
  return (
    <>
      <div className={styles.mapWriteContainer}>
        <div className={styles.mapWriteHeader}>
          <button
            onClick={() => {
              setIsSelected(false);
              setIsEdit(false);
              setIsPost(false);
              return;
            }}
          >
            {" "}
            ←{" "}
          </button>
          <h3>글쓰기</h3>
        </div>
        <form onSubmit={handleSubmit} className={styles.mapWriteBody}>
          <p>닉네임</p>
          <input
            className={styles.mapWriteBodyInput}
            type="text"
            placeholder="익명"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>비밀번호</p>
          <input
            className={styles.mapWriteBodyInput}
            type="password"
            placeholder="4글자 이상"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>촬영날짜</p>
          <input
            className={styles.mapWriteBodyInput}
            type="date"
            value={takeDate}
            onChange={(e) => setTakeDate(e.target.value)}
          />
          <p>위 치</p>
          <input
            className={styles.mapWriteBodyInput}
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <div className={styles.fullGrid}>
            <p style={{ textAlign: "left" }}>내용</p>
            <textarea
              className={styles.mapWriteDescription}
              type="text"
              placeholder="내용"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.fullGrid}>
            <input
              type="file"
              onChange={handleFileChange}
              className={styles.file}
            />
          </div>
          <div className={styles.fullGrid}>
            <button type="submit" className={styles.submitBtn}>
              글쓰기
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SideMenuModify;
