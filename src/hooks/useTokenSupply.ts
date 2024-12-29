import { useState, useEffect } from 'react';
import { fetchTokenMeta, fetchHolders } from '../utils/api/solscan';

interface TokenSupplyData {
  totalSupply: number;
  holders: number;
}

const DEFAULT_DATA: TokenSupplyData = {
  totalSupply: 1000000000,
  holders: 1000,
};

export const useTokenSupply = () => {
  const [data, setData] = useState<TokenSupplyData>(DEFAULT_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSupplyData = async () => {
      try {
        const [metaData, holdersData] = await Promise.all([
          fetchTokenMeta(),
          fetchHolders()
        ]);

        setData({
          totalSupply: parseFloat(metaData.data?.supply || DEFAULT_DATA.totalSupply.toString()),
          holders: holdersData.data?.total || DEFAULT_DATA.holders
        });
        setError(null);
      } catch (err) {
        console.error('Supply data fetch error:', err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchSupplyData();
    const interval = setInterval(fetchSupplyData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};