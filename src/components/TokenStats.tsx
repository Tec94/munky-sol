import React from 'react';
import { TrendingUp, Users, Wallet } from 'lucide-react';
import { useTokenData } from '../hooks/useTokenData';
import { useTokenSupply } from '../hooks/useTokenSupply';
import { formatNumber } from '../utils/format';

export const TokenStats: React.FC = () => {
  const { data: tokenData, loading: tokenLoading } = useTokenData();
  const { data: supplyData, loading: supplyLoading } = useTokenSupply();
  
  const mainPair = tokenData?.pairs?.[0];
  const loading = tokenLoading || supplyLoading;

  const marketCap = mainPair?.priceUsd 
    ? parseFloat(mainPair.priceUsd) * supplyData.totalSupply 
    : 0;

  return (
    <div className="py-20 px-4 bg-purple-950/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 p-8 rounded-2xl backdrop-blur-sm">
            <TrendingUp className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              {loading ? 'Loading...' : `$${formatNumber(marketCap)}`}
            </h3>
            <p className="text-purple-100/60">Market Cap</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 p-8 rounded-2xl backdrop-blur-sm">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              {loading ? 'Loading...' : formatNumber(supplyData.holders)}
            </h3>
            <p className="text-purple-100/60">Holders</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-purple-950/50 p-8 rounded-2xl backdrop-blur-sm">
            <Wallet className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              {loading ? 'Loading...' : formatNumber(supplyData.totalSupply)}
            </h3>
            <p className="text-purple-100/60">Total Supply</p>
          </div>
        </div>
      </div>
    </div>
  );
};