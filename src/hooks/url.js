import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
  const search = new URLSearchParams(useLocation().search);
  return Object.fromEntries(search);
};
