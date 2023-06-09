import skyImg from "/QuizResult/sky.png";
import cityImg from "/QuizResult/city.jpg";
import styles from "./Quiz.module.css";

const skyCssFunc = (point) => {
  const point100sky = `${styles.quizSkyImg} ${styles.opacity100}`;
  const point80sky = `${styles.quizSkyImg} ${styles.opacity80}`;
  const point60sky = `${styles.quizSkyImg} ${styles.opacity60}`;
  const point40sky = `${styles.quizSkyImg} ${styles.opacity40}`;
  const point20sky = `${styles.quizSkyImg} ${styles.opacity20}`;
  const point0sky = `${styles.quizSkyImg} ${styles.opacity0}`;

  if (point === 100) return point100sky;
  if (point === 80) return point80sky;
  if (point === 60) return point60sky;
  if (point === 40) return point40sky;
  if (point === 20) return point20sky;
  if (point === 0) return point0sky;
};

const cityCssFunc = (point) => {
  const point100city = `${styles.quizCityImg} ${styles.bright100}`;
  const point70city = `${styles.quizCityImg} ${styles.bright70}`;
  const point40city = `${styles.quizCityImg} ${styles.bright40}`;
  const point0city = `${styles.quizCityImg} ${styles.bright0}`;
  if (point === 100) return point100city;
  if (point === 80 || point === 60) return point70city;
  if (point === 40 || point === 20 || point === 0) return point40city;
  if (point === 0) return point0city;
};

const Quiz100 = ({ point, description }) => {
  return (
    <>
      <div className={styles.quizImageContainer}>
        <img src={skyImg} alt="sky" className={skyCssFunc(point)} />
        <img src={cityImg} alt="city" className={cityCssFunc(point)} />
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

export default Quiz100;
