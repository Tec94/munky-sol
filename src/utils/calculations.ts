export const calculateMunkyAmount = (
  solAmount: number,
  solPrice: number,
  munkyPriceUsd: number
): number => {
  if (!solAmount || !solPrice || !munkyPriceUsd) return 0;
  return (solAmount * solPrice) / munkyPriceUsd;
};