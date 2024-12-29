import { CONTRACT_ADDRESS } from '../constants';

// Updated to use correct Solscan API endpoints
const SOLSCAN_API_BASE = 'https://api.solscan.io';

export const fetchTokenMeta = async () => {
  const response = await fetch(`${SOLSCAN_API_BASE}/token/meta?token=${CONTRACT_ADDRESS}`, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0',
    }
  });
  if (!response.ok) throw new Error('Failed to fetch token metadata');
  const data = await response.json();
  if (!data.success) throw new Error(data.message || 'Invalid token metadata response');
  return data;
};

export const fetchHolders = async () => {
  const response = await fetch(`${SOLSCAN_API_BASE}/token/holders?token=${CONTRACT_ADDRESS}`, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0',
    }
  });
  if (!response.ok) throw new Error('Failed to fetch holders data');
  const data = await response.json();
  if (!data.success) throw new Error(data.message || 'Invalid holders data response');
  return data;
};