import styles from "./Introduce.module.css";

const KoreaLightPollutionTable = ({ resData }) => {
  return (
    <>
      <table className={styles.koreaChartTable}>
        <thead>
          <tr style={{ height: "35px", fontSize: "18px" }}>
            <th>연도</th>
            <th>광량합</th>
            <th>평균조도</th>
          </tr>
        </thead>
        <tbody>
          {resData.map((data, idx) => {
            return (
              <tr
                style={{
                  height: "30px",
                  fontWeight: "200",
                  fontSize: "14px",
                }}
                key={idx.toString()}
              >
                <td>{data.year}</td>
                <td>{data.sum.toLocaleString()}</td>
                <td>{data.mean}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default KoreaLightPollutionTable;
