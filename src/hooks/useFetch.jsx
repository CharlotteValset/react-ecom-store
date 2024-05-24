import { useState, useEffect } from "react";

export function useFetch(apiUrl) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setHasError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json.data);
      } catch (error) {
        console.log(error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(apiUrl);
  }, [apiUrl]);
  return { data, isLoading, hasError };
}
