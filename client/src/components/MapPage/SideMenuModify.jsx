import styles from "./MapPage.module.css";
import { useState, useEffect } from "react";
import usePutFetch from "../../hooks/usePutFetch"; // Changed from usePostFetch

const LocationDropDownItem = ({ location, setLocation, setIsDropMenu }) => {
  return (
    <li
      onClick={() => {
        setLocation(location);
        setIsDropMenu(false);
      }}
    >
      {location}
    </li>
  );
};

const LocationDropDownMenu = ({ setLocation, setIsDropMenu }) => {
  const locationList = [
    "남가좌1동",
    "남가좌2동",
    "북가좌1동",
    "북가좌2동",
    "북아현동",
    "신촌동",
    "연희동",
    "천연동",
    "충현동",
    "홍은1동",
    "홍은2동",
    "홍제1동",
    "홍제2동",
    "홍제3동",
  ];

  return (
    <ul className={styles.dropMenu}>
      {locationList.map((loc) => (
        <LocationDropDownItem
          location={loc}
          key={loc}
          setLocation={setLocation}
          setIsDropMenu={setIsDropMenu}
        />
      ))}
    </ul>
  );
};

const SideMenuModify = ({ setIsPost, setIsEdit, setIsSelected, editData }) => {
  const [file, setFile] = useState(editData.file_path);
  const [description, setDescription] = useState(editData.description);
  const [location, setLocation] = useState(editData.location);
  const [takeDate, setTakeDate] = useState(editData.post_date);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(editData.username);
  const [galleryId, setGalleryId] = useState(parseInt(editData.gallery_id));
  const [isDropMenu, setIsDropMenu] = useState(false);
  const { data, isLoading, error, fetchData } = usePutFetch();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isDropMenu) {
      return;
    }
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

    const formData = new FormData();
    formData.append("description", description);
    formData.append("location", location);
    formData.append("take_date", takeDate);
    formData.append("galleryId", galleryId);
    formData.append("password", password); // Add password to the form data
    formData.append("file_path", file);

    await fetchData("gallery", formData);
    window.location.reload();
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
          <div>
            <input
              type="button"
              className={styles.mapWriteBodyInput}
              value={location}
              onClick={() => setIsDropMenu(!isDropMenu)}
            />
            {isDropMenu && (
              <LocationDropDownMenu
                setIsDropMenu={setIsDropMenu}
                setLocation={setLocation}
              />
            )}
          </div>
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
