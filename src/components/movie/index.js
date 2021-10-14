import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';
import Card from 'react-bootstrap/Card'
import Image from '../movieImage';
import Rating from '../rating';
import { movieResultType, movieType } from '../../types/movies';

import './styles.css';

const Movie = ({ movie, quickView }) => {

  const overview = quickView ? truncate(movie.overview, { length: 40 }) : movie.overview;
  const size = quickView ? 'w300' : 'w780';

  return (
    <Card>
      {movie.backdrop_path ? (
        <Image
          as={Card.Image}
          path={movie.backdrop_path}
          alt={movie.title}
          size={size}
          type="backdrop"
          className="movie--image"
          variant="top"
        />
      ) : null}
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text as="div">
          <div>{overview}</div>
          <div className={classNames('mt-2', { 'mb-2': quickView })}>
            <Rating value={movie.vote_average} />
          </div>
        </Card.Text>
        {quickView ? (
          <Card.Link as={Link} to={`/movie/${movie.id}`}>More info</Card.Link>
        ) : null}
      </Card.Body>
    </Card>
  );
};

Movie.propTypes = {
  movie: PropTypes.oneOfType([movieResultType, movieType]),
  quickView: PropTypes.bool,
};

export default Movie;
