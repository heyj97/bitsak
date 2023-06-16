import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/api";

const usePutFetch = (param, postData) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `http://${API_BASE_URL}/api/${param}`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "PUT",
          body: postData,
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
          setError(error);
          setIsLoading(false);
        }
      }
    };

    // postData가 변경될 때마다 API를 호출합니다.
    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, postData]); // Dependency 수정

  return { data, isLoading, error };
};

export default usePutFetch;
