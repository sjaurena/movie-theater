import axios from 'axios';
import { merge } from 'lodash'

const apiUrl = 'https://api.themoviedb.org/3'
const apiKey = '683444839e92f90a013b578bbe54e71f';

const callApi = async (path, params) => {
  const response = await axios(`${apiUrl}${path}`, {
    params: merge(params, {
      api_key: apiKey
    })
  });
  return response.data;
};

export const configuration = () => {
  return callApi('/configuration');
}

export const discoverMovies = () => {
  return callApi('/discover/movie');
};

export const searchMovies = query => {
  return callApi('/search/movie', { query });
};

export const getMovie = id => {
  return callApi(`/movie/${id}`);
};
