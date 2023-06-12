import { useEffect, useState } from "react";
import { API_BASE_URL, API_PORT } from "../constants/api";
const useGetFetch = (param, shouldFetch) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `http://${API_BASE_URL}:${API_PORT}/api/${param}`;

  const abortController = new AbortController();

  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: "GET",
        signal: abortController.signal,
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}, ${response.statusText}`);
      }
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      if (!abortController.signal.aborted) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    shouldFetch && fetchData();
    return () => {
      abortController.abort();
    };
  }, [shouldFetch, fetchData]);

  const mutate = () => fetchData();
  return { data, isLoading, error, mutate };
};

export default useGetFetch;
