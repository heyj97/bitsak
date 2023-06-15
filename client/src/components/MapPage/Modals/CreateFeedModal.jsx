/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from '../MapPage.module.css';

const CreateFeedModal = ({ setModalOpen, id, title, content, writer }) => {
  // 모달 끄기 
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.ModalContainer}>
        <div className={styles.ModalHeader}>
            <span>
                <button className={styles.ModalClose} onClick={closeModal}>
                X
                </button>
                <div><h1>게시물 작성</h1></div>
                <button className={styles.ModalUpload}> 완료 </button> 
            </span>
        </div> {/* ModalHeader */}
        <div className={styles.ModalContent}>
            <div className={styles.UserInfo}>
                <div className={styles.InfoSet}>ID<div id="id"></div></div>
                <div className={styles.InfoSet}>PW<div id="pw"></div></div>
            </div>
            <div className={styles.ModalDate}>
                <div id="YY">연도</div>
                <div id="MM">월</div>
                <div id="DD">일</div>
            </div>
            <div className={styles.ModalLocation}>위치주소</div>
            <div className={styles.ModalImgUpload}>
                <button>이미지업로드</button>
            </div>
            <div className={styles.ModalDescription}>
                내용
            </div>

        </div> {/* ModalContent */}
      
    </div>
  );
};

export default CreateFeedModal;
