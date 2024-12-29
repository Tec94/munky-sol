export interface PairData {
  priceUsd: string;
  liquidity: {
    usd: number;
  };
  volume: {
    h24: number;
  };
}

export interface TokenData {
  pairs: PairData[];
}

export interface SolanaPrice {
  solana: {
    usd: number;
  };
}