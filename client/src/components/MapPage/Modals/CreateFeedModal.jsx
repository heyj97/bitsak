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
                <button> X </button>
                <div> 게시물 작성 </div>
                <button> 완료 </button> 
            </span>
        </div> {/* ModalHeader */}
        <div className={styles.ModalContent}>
            <div className={styles.UserInfo}>
                <div>ID</div>
                <div>PW</div>
            </div>
            <div className={styles.ModalDate}>
                <div id="YY">연도</div>
                <div id="MM">월</div>
                <div id="DD">일</div>
            </div>
            <div className={styles.ModalLocation}>위치주소</div>
            <div className={styles.ModalImgUpload}>
                <button></button>
            </div>
            <div className={styles.ModalDescription}>
                내용
            </div>

        </div> {/* ModalContent */}
      <button className={styles.ModalClose} onClick={closeModal}>
        X
      </button>
    </div>
  );
};

export default CreateFeedModal;
