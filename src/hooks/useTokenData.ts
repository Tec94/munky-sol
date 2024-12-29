import { useState, useEffect } from 'react';
import { TokenData } from '../utils/types';
import { DEX_SCREENER_API } from '../utils/constants';

export const useTokenData = () => {
  const [data, setData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DEX_SCREENER_API);
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError('Failed to fetch token data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};