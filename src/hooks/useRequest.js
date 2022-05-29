import { useState, useEffect } from 'react';
import { getPokemonPage } from '../api/pokemonAPI';
import axios from 'axios';

const useRequest = async (config, setData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    try {
    } catch (error) {}
  };

  useEffect(() => {
    setIsLoading(true);

    return () => setIsLoading(false);
  }, []);

  return { isLoading, error };
};

export default useRequest;
