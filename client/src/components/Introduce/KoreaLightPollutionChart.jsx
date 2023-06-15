import { useEffect, useState, useMemo } from "react";
import useGetFetch from "../../hooks/useGetFetch";
import Error from "../common/Error/Error";
import Spinner from "../common/Spinner/Spinner";
import objResToArr from "../../utils/objResToArr";
import LineChart from "./LineChart";
import KoreaLightPollutionTable from "./KoreaLightPollutionTable";
import styles from "./Introduce.module.css";

const KoreaLightPollutionChart = () => {
  const { data, isLoading, error } = useGetFetch("korea-lightpollution");

  if (error)
    return (
      <div>
        <Error error={error} />
      </div>
    );
  return (
    <div className={styles.globalLPChart}>
      <h2 className={styles.ChartTitle}>
        우리나라의 평균조도는{" "}
        <span className={styles.ChartTitleHightlight}>지속적으로 상승중</span>
        입니다.
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        Array.isArray(data.data) &&
        data.data.length > 0 && (
          <>
            <ChartComp resData={data.data} />
            <KoreaLightPollutionTable resData={data.data} />
          </>
        )
      )}
      <p className={styles.ChartParagraph}>
        <a
          href="https://www.lightpollutionmap.info/LP_Stats/country.html?country=South%20Korea&type="
          target="_blank"
        >
          Light pollution map
        </a>
        <br />
        <br />
        2012년부터 2022년까지 지난 10년동안
        <br /> 우리나라의 야간조도는 지속적으로 상승중입니다.{" "}
      </p>
    </div>
  );
};

const ChartComp = ({ resData }) => {
  const [yearArr, setYearArr] = useState([]);
  const [sumArr, setSumArr] = useState([]);
  const newarr1 = useMemo(() => objResToArr(resData, "sum"), [resData]);
  const newarr2 = useMemo(() => objResToArr(resData, "year"), [resData]);

  useEffect(() => {
    setYearArr(newarr1);
    setSumArr(newarr2);
  }, [resData]);
  return (
    <>
      {resData && resData.length > 0 && (
        <LineChart label={sumArr} data={yearArr} />
      )}
    </>
  );
};

export default KoreaLightPollutionChart;
