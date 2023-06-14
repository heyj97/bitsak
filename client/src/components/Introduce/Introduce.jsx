import styles from "./Introduce.module.css";
import GlobalLightPollutionChart from "./GlobalLightPollutionChart";
import YearlyComplaints from "./YearlyComplaints";
import KoreaLightPollutionChart from "./KoreaLightPollutionChart";
import ComplaintsMarkerMap from "./ComplaintsMarkerMap";

const Introduce = () => {
  return (
    <>
      <div className={styles.wholeContainer}>
        <GlobalLightPollutionChart />
        <KoreaLightPollutionChart />
        <ComplaintsMarkerMap />
        <YearlyComplaints />
      </div>
    </>
  );
};

export default Introduce;
