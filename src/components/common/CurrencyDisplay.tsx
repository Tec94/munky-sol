import React from 'react';
import { RefreshCw } from 'lucide-react';

interface CurrencyDisplayProps {
  label: string;
  value: string;
  loading: boolean;
  price: number;
  symbol: string;
}

export const CurrencyDisplay: React.FC<CurrencyDisplayProps> = ({
  label,
  value,
  loading,
  price,
  symbol
}) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <label className="block text-sm font-medium text-purple-300">{label}</label>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-purple-400">
          1 {symbol} = ${loading ? '...' : price.toFixed(8)}
        </span>
        <RefreshCw className={`h-4 w-4 text-purple-400 ${loading ? 'animate-spin' : ''}`} />
      </div>
    </div>
    <div className="bg-purple-950/50 border border-purple-400/20 rounded-lg px-4 py-3">
      <span className="text-purple-100">{value}</span>
      <span className="text-purple-400 ml-2">{symbol}</span>
    </div>
  </div>
);