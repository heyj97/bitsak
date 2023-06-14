import styles from "./Quiz.module.css";
import nullImg from "/QuizResult/noImg.png";
import img0 from "/QuizResult/0.webp";
import img1 from "/QuizResult/1.webp";
import img2 from "/QuizResult/2.webp";
import img3 from "/QuizResult/3.webp";
import img4 from "/QuizResult/4.webp";
import img5 from "/QuizResult/5.webp";
import img6 from "/QuizResult/6.webp";
import img7 from "/QuizResult/7.webp";

function getRandomInt() {
  const imgArr = [img0, img1, img2, img3, img4, img5, img6, img7];
  return imgArr[Math.floor(Math.random() * 8)];
}

const QuizPhoto = ({ point, description }) => {
  return (
    <>
      <div className={styles.quizImageContainer}>
        <img
          src={getRandomInt()}
          className={styles.quizCityImg}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = nullImg;
          }}
        />
      </div>
      <div className={styles.quizResultContent}>
        <h2>
          <span className={styles.pointSpan}>{point}점</span> 입니다!
        </h2>
        <p>{description}</p>
      </div>
    </>
  );
};

export default QuizPhoto;
