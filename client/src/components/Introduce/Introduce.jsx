import styles from "./Introduce.module.css";
import GlobalLightPollutionChart from "./GlobalLightPollutionChart";
import YearlyComplaints from "./YearlyComplaints";

const Introduce = () => {
  return (
    <>
      <div className={styles.wholeContainer}>
        <GlobalLightPollutionChart />
        <YearlyComplaints />
      </div>
    </>
  );
};

export default Introduce;
