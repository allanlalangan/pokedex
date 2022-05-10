import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = async (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const resp = axios.get(url);
  }, [url]);

  return data;
};

export default useFetch;
