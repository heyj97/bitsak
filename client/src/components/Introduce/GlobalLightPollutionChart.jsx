import { useEffect, useState, useMemo } from "react";
import useGetFetch from "../../hooks/useGetFetch";
import Error from "../common/Error/Error";
import Spinner from "../common/Spinner/Spinner";
import objResToArr from "../../utils/objResToArr";
import BarChart from "./BarChart";
import styles from "./Introduce.module.css";

const GlobalLightPollutionChart = () => {
  const { data, isLoading, error } = useGetFetch("g20-rank");

  if (error)
    return (
      <div>
        <Error error={error.message} />
      </div>
    );
  return (
    <div className={styles.globalLPChart}>
      <h2 className={styles.ChartTitle}>
        G20 국가들 중 우리나라의 빛 공해수준은{" "}
        <span className={styles.ChartTitleHightlight}>1등</span>입니다.
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        Array.isArray(data.data) &&
        data.data.length > 0 && (
          <>
            <p className={styles.unitParagraph}>단위: lux</p>
            <ChartComp resData={data.data} />
          </>
        )
      )}
      <p className={styles.ChartParagraph}>
        <a href="https://www.lightpollutionmap.info/LP_Stats/" target="_blank">
          Light pollution map
        </a>
        <br />
        <br />
        G20국가들의 평균 야간조도를 비교해보았을 때, <br />
        우리나라의 야간조도가 가장 높습니다.
      </p>
    </div>
  );
};

const ChartComp = ({ resData }) => {
  const [avgMeanArr, setAvgMeanArr] = useState([]);
  const [countryArr, setCountryArr] = useState([]);
  const newarr1 = useMemo(() => objResToArr(resData, "avg_mean"), [resData]);
  const newarr2 = useMemo(() => objResToArr(resData, "country"), [resData]);

  useEffect(() => {
    setAvgMeanArr(newarr1);
    setCountryArr(newarr2);
  }, [resData]);
  return (
    <>
      {resData && resData.length > 0 && (
        <BarChart label={countryArr} data={avgMeanArr} dataName="야간조도" />
      )}
    </>
  );
};

export default GlobalLightPollutionChart;
