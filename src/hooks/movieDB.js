import { useContext } from 'react';
import { MovieDBContext } from '../context/movieDB';

export const useMovieDB = () => {
  return useContext(MovieDBContext);
};
