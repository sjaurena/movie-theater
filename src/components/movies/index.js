import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import { movieResultType } from '../../types/movies';
import Movie from '../movie';
import Rating from '../rating';

import './styles.css';

const Movies = ({ movies }) => {

  const [stars, setStars] = useState(0);
  const [list, setList] = useState(movies);

  useEffect(() => {
    const filtered = movies.filter(movie => {
      return (stars === 0) || (
        (movie.vote_average > (stars - 1) * 2) && 
        (movie.vote_average <= stars * 2)
      );
    });
    setList(filtered);
  }, [movies, stars])

  const onChange = value => {
    setStars(value);
  };

  if (movies.length === 0) {
    return (
      <Alert variant="danger">No movies found!</Alert>
    );
  }

  return (
    <div className="movies">
      <div className="text-right">
        <Rating value={stars} onChange={onChange} className="mb-2" />
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        {list.length === 0 ? (
          <Alert variant="danger" className="mt-3">No movies found with {stars} stars!</Alert>
        ) : list.map(movie => (
          <div key={movie.id} className="col-xs-12 col-sm-6 col-md-4 p-2">
            <Movie movie={movie} quickView />
          </div>
        ))}
      </div>
    </div>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(movieResultType),
};

export default Movies;
