import { useEffect, useState, useMemo } from "react";
import useGetFetch from "../../hooks/useGetFetch";
import Error from "../common/Error/Error";
import Spinner from "../common/Spinner/Spinner";
import objResToArr from "../../utils/objResToArr";
import BarChart from "./BarChart";

const GlobalLightPollutionChart = () => {
  const { data, isLoading, error } = useGetFetch("g20-rank");

  if (error)
    return (
      <div>
        <Error error={error} />
      </div>
    );
  return (
    <div>
      <h2>Global Light Pollution Chart</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        Array.isArray(data.data) &&
        data.data.length > 0 && <DataTest resData={data.data} />
      )}
    </div>
  );
};

const DataTest = ({ resData }) => {
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
        <BarChart label={countryArr} data={avgMeanArr} />
      )}
    </>
  );
};

export default GlobalLightPollutionChart;
