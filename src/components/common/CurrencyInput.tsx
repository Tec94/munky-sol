import React from 'react';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  symbol: string;
}

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
  label,
  value,
  onChange,
  symbol
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-purple-300 mb-2">
      {label}
    </label>
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full bg-purple-950/50 border border-purple-400/20 rounded-lg px-4 py-3 text-purple-100 focus:outline-none focus:border-purple-400"
        placeholder={`Enter ${symbol} amount`}
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-400">
        {symbol}
      </span>
    </div>
  </div>
);