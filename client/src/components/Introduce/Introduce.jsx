import styles from "./Introduce.module.css";
import btnStyles from "../Quiz/Quiz.module.css";
import GlobalLightPollutionChart from "./GlobalLightPollutionChart";
import YearlyComplaints from "./YearlyComplaints";
import KoreaLightPollutionChart from "./KoreaLightPollutionChart";
import ComplaintsMarkerMap from "./ComplaintsMarkerMap";
import SeoulLightPollution from "./SeoulLightPollution";
import { useNavigate } from "react-router-dom";
import LPIntroduce from "./LPIntroduce";

const Introduce = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.wholeContainer}>
        <LPIntroduce />
        <GlobalLightPollutionChart />
        <KoreaLightPollutionChart />
        <SeoulLightPollution />
        <ComplaintsMarkerMap />
        <YearlyComplaints />
        <div
          className={btnStyles.linkBtnContainer}
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <button onClick={() => navigate("/quiz")}>빛공해 퀴즈</button>
          <button onClick={() => navigate("/map")}>빛공해 제보</button>
        </div>
      </div>
    </>
  );
};

export default Introduce;
