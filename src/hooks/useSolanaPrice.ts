import { useState, useEffect } from 'react';
import { SolanaPrice } from '../utils/types';
import { SOLANA_PRICE_API } from '../utils/constants';

export const useSolanaPrice = () => {
  const [price, setPrice] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch(SOLANA_PRICE_API);
        const data: SolanaPrice = await response.json();
        setPrice(data.solana.usd);
      } catch (err) {
        setError('Failed to fetch Solana price');
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  return { price, loading, error };
};