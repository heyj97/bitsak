import { useEffect, useState, useMemo } from "react";
import useGetFetch from "../../hooks/useGetFetch";
import Error from "../common/Error/Error";
import Spinner from "../common/Spinner/Spinner";
import objResToArr from "../../utils/objResToArr";
import LineChart from "./LineChart";
import KoreaLightPollutionTable from "./KoreaLightPollutionTable";

const KoreaLightPollutionChart = () => {
  const { data, isLoading, error } = useGetFetch("korea-lightpollution");

  if (error)
    return (
      <div>
        <Error error={error} />
      </div>
    );
  return (
    <div>
      <h2>지금 우리 나라는..</h2>
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
