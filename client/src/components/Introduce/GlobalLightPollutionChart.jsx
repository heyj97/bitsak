import useGetFetch from "../../hooks/useGetFetch";
import Error from "../common/Error/Error";
import Spinner from "../common/Spinner/Spinner";

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
        Array.isArray(data) && data.length > 0 && <DataTest resData={data} />
      )}
    </div>
  );
};

const DataTest = ({ resData }) => {
  return (
    <>
      {resData &&
        resData.length > 0 &&
        resData.map((data, idx) => {
          return (
            <div key={idx}>
              <h3>Country: {data.country}</h3>
              <h5>Avg_mean: {data.avg_mean}</h5>
              <p>Avg_trend: {data.trend}</p>
            </div>
          );
        })}
    </>
  );
};

export default GlobalLightPollutionChart;
