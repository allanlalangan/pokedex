import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = async (config, setDataFn) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    try {
      const resp = await axios(config.url, config);
    } catch (error) {}
  };

  useEffect(() => {
    setIsLoading(true);

    return () => setIsLoading(false);
  }, []);

  return { isLoading, error };
};

export default useRequest;
