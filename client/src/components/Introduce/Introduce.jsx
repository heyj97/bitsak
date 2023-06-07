import useGetFetch from "../../utils/useGetFetch";
import { API_BASE_URL, API_PORT } from "../../constants/api";

const Introduce = () => {
  const url = `http://${API_BASE_URL}:${API_PORT}/g20-rank`;
  const { data, isLoading, error } = useGetFetch(url);

  if (error) {
    console.log("에러발생:", error);
  }

  if (isLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div>
      {data &&
        data.map((country) => (
          <div key={country.country}>
            <h2>{country.country}</h2>
            <h3>{country.avg_mean}</h3>
            <h4>{country.trend}</h4>
          </div>
        ))}
    </div>
  );
};

export default Introduce;
