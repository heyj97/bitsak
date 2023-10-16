import { useEffect, useState, useMemo } from "react";
import useGetFetch from "../../hooks/useGetFetch";
import Error from "../common/Error/Error";
import Spinner from "../common/Spinner/Spinner";
import objResToArr from "../../utils/objResToArr";
import BarChart from "./BarChart";
import styles from "./Introduce.module.css";

const SeoulLightPollution = () => {
  const { data, isLoading, error } = useGetFetch("seoul-lightpollution");

  if (error)
    return (
      <div>
        <Error error={error.message} />
      </div>
    );
  return (
    <div className={styles.globalLPChart}>
      <h2 className={styles.ChartTitle}>
        서울의 모든 행정구들 중 평균조도는
        <br />
        <span className={styles.ChartTitleHightlight}>서대문구</span>가 가장
        높습니다.
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        Array.isArray(data.data) &&
        data.data.length > 0 && (
          <>
            {/* <p className={styles.unitParagraph}>단위: lux</p> */}
            <ChartComp resData={data.data} />
          </>
        )
      )}
      <p className={styles.ChartParagraph}>
        <a
          href="http://data.seoul.go.kr/dataList/OA-15969/S/1/datasetView.do"
          target="_black"
        >
          공공데이터 포털 : 스마트서울 도시데이터 센서(S-DoT) 환경정보
        </a>
        <br />
        <br />
      </p>
    </div>
  );
};

const ChartComp = ({ resData }) => {
  const [avgMeanArr, setAvgMeanArr] = useState([]);
  const [countryArr, setCountryArr] = useState([]);
  const newarr1 = useMemo(() => objResToArr(resData, "illum_avg"), [resData]);
  const newarr2 = useMemo(() => objResToArr(resData, "gu_name"), [resData]);

  useEffect(() => {
    setAvgMeanArr(newarr1);
    setCountryArr(newarr2);
  }, [resData]);
  return (
    <>
      {resData && resData.length > 0 && (
        <BarChart label={countryArr} data={avgMeanArr} dataName="조도" />
      )}
    </>
  );
};

export default SeoulLightPollution;
