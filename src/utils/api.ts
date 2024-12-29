import { useState, useEffect } from 'react';

const CONTRACT_ADDRESS = '65wwCdZaHvWLXKh7bZQDaRsY7yRj97sX9VDyGXMXpump';
const DEX_SCREENER_API = `https://api.dexscreener.com/latest/dex/tokens/${CONTRACT_ADDRESS}`;

interface PairData {
  priceUsd: string;
  liquidity: {
    usd: number;
  };
  volume: {
    h24: number;
  };
}

interface TokenData {
  pairs: PairData[];
}

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
    const interval = setInterval(fetchData, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return { data, loading, error };
};

export const formatNumber = (num: number): string => {
  if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
  if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
  if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
  return num.toFixed(2);
};