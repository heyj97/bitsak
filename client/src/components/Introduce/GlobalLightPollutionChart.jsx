import { useEffect } from "react";
import { API_BASE_URL, API_PORT } from "../../constants/api";
import useGetFetch from "../../hooks/useGetFetch";
import Spinner from "../../utils/Spinner/Spinner";

const GlobalLightPollutionChart = () => {
    const url = `http://${API_BASE_URL}:${API_PORT}/g20-rank`;
    const {data, isLoading, error} = useGetFetch(url)
    if (error) return <div>Error!</div>
    return (
        <div>
            <h2>
                Global Light Pollution Chart
            </h2>
            {isLoading ? <Spinner /> : Array.isArray(data) && data.length > 0 && <DataTest resData={data} />}
        </div>
    )
}

const DataTest = (resData) => {
    return(
        <>
        {resData.resData && resData.resData.length > 0 && resData.resData.map((data, idx) => {
            return(
                <div key={idx}>
                    <h3>Country: {data.country}</h3>
                    <h5>Avg_mean: {data.avg_mean}</h5>
                    <p>Avg_trend: {data.trend}</p>
                </div>
            )
        })
        }</>
    )
}

export default GlobalLightPollutionChart;