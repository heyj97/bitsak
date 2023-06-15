import { useMemo } from "react";
import styles from "./Introduce.module.css";
import shuffleArrByValue from "../../utils/shuffleArrByValue";

const randomColor = (min, max) => {
  const code = Math.floor(Math.random() * (max - min + 1)) + min;
  const code2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const code3 = Math.floor(Math.random() * (max - min + 1)) + min;
  return `rgb(${code},${code2},${code3})`;
};

const WordCloud = ({ resData }) => {
  const randomArr = useMemo(() => shuffleArrByValue(resData), [resData]);

  return (
    <div className={styles.wordCloudBox}>
      {randomArr.map((item) => {
        return (
          <CloudItem key={item.label} label={item.label} value={item.value} />
        );
      })}
    </div>
  );
};

const CloudItem = ({ label, value }) => {
  return (
    <span
      style={{
        fontSize:
          value > 23 ? `${value}px` : `${value * (1 + Math.random())}px`,
        fontWeight: "bold",
        display: "inline-block",
        padding: "5px",
        color:
          value > 25 || value === 24.146341 ? randomColor(50, 255) : "#ccc",
      }}
    >
      {label}
    </span>
  );
};

export default WordCloud;
