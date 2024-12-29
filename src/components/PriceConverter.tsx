import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { useTokenData } from '../hooks/useTokenData';
import { useSolanaPrice } from '../hooks/useSolanaPrice';
import { CurrencyInput } from './common/CurrencyInput';
import { CurrencyDisplay } from './common/CurrencyDisplay';
import { calculateMunkyAmount } from '../utils/calculations';

export const PriceConverter: React.FC = () => {
  const [solAmount, setSolAmount] = useState<string>('1');
  const [munkyAmount, setMunkyAmount] = useState<string>('0');
  const { data: tokenData, loading: tokenLoading } = useTokenData();
  const { price: solPrice, loading: solLoading } = useSolanaPrice();
  
  const mainPair = tokenData?.pairs?.[0];
  const priceUsd = mainPair?.priceUsd ? parseFloat(mainPair.priceUsd) : 0;
  const loading = tokenLoading || solLoading;

  useEffect(() => {
    const updateMunkyAmount = () => {
      const sol = parseFloat(solAmount) || 0;
      const amount = calculateMunkyAmount(sol, solPrice, priceUsd);
      setMunkyAmount(amount.toLocaleString());
    };

    updateMunkyAmount();
  }, [solAmount, priceUsd, solPrice]);

  return (
    <div className="py-20 px-4" id="converter">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Price Converter</h2>
        
        <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-400/10">
          <CurrencyInput
            label={`SOL Amount (1 SOL = $${loading ? '...' : solPrice.toFixed(2)})`}
            value={solAmount}
            onChange={(e) => setSolAmount(e.target.value)}
            symbol="SOL"
          />
          
          <CurrencyDisplay
            label="$MUNKY Amount"
            value={munkyAmount}
            loading={loading}
            price={priceUsd}
            symbol="$MUNKY"
          />
          
          <p className="text-center text-purple-300/60 text-sm">
            Prices update every 60 seconds
          </p>
        </div>
      </div>
    </div>
  );
};