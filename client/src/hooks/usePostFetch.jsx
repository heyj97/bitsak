import { useState } from "react";
import { API_BASE_URL } from "../constants/api";

const usePostFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortController = new AbortController();

  const fetchData = async (param, postData) => {
    const url = `http://${API_BASE_URL}/api/${param}`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: postData,
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

  return { data, isLoading, error, fetchData };
};

export default usePostFetch;
