import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/api";

const usePostFetch = (param, postData) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `http://${API_BASE_URL}/api/${param}`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
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

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, postData]);

  return { data, isLoading, error };
};

export default usePostFetch;
