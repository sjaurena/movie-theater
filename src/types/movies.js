import PropTypes from 'prop-types';

export const movieResultType = PropTypes.shape({
  poster_path: PropTypes.string,
  adult: PropTypes.bool,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number,
  original_title: PropTypes.string,
  original_language: PropTypes.string,
  title: PropTypes.string,
  backdrop_path: PropTypes.string,
  popularity: PropTypes.number,
  vote_count: PropTypes.number,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
});

export const movieResultListType = PropTypes.shape({
  page: PropTypes.number,
  results: PropTypes.arrayOf(movieResultType),
  total_results: PropTypes.number,
  total_pages: PropTypes.number,
});

export const genreType = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
});

export const companyType = PropTypes.shape({
  name: PropTypes.string,
  id: PropTypes.number,
  logo_path: PropTypes.string,
  origin_country: PropTypes.string,
});

export const countryType = PropTypes.shape({
  iso_3166_1: PropTypes.string,
  name: PropTypes.string,
});

export const languageType = PropTypes.shape({
  iso_639_1: PropTypes.string,
  name: PropTypes.string,
});

export const movieType = PropTypes.shape({  
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  belongs_to_collection: PropTypes.object,
  budget: PropTypes.number,
  genres: PropTypes.arrayOf(genreType),
  homepage: PropTypes.string,
  id: PropTypes.number,
  imdb_id: PropTypes.string,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  production_companies: PropTypes.arrayOf(companyType),
  production_countries: PropTypes.arrayOf(countryType),
  release_date: PropTypes.string,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  spoken_languages: PropTypes.arrayOf(languageType),
  status: PropTypes.oneOf(['Rumored', 'Planned', 'In Production', 'Post Production', 'Released', 'Canceled']),
  tagline: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
});
