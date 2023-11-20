import { useMemo } from "react";
import shuffleArrByValue from "../../utils/shuffleArrByValue";

function randomColor() {
  const color = ["#ff6384", "#E14263", "#FF7794", "#FF0036"];
  var index = Math.floor(Math.random() * color.length);
  return color[index];
}

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
        color: value > 25 || value === 24.146341 ? randomColor() : "#ccc",
      }}
    >
      {label}
    </span>
  );
};

export default WordCloud;
