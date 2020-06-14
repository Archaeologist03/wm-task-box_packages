import { useState, useEffect } from 'react';
import axios from 'axios';

// HTTP CALL
// - Returns fetched data and loading state.
export const useHttp = (url, dependencies) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    try {
      (async function fetchData() {
        const response = await axios.get(url);
        setFetchedData(response.data);

        setIsLoading(false);
      })();
    } catch (error) {
      console.log('fail to fetch', error);
      setIsLoading(false);
      Promise.reject(error);
    }
  }, [dependencies, url]);

  return [fetchedData, isLoading];
};
