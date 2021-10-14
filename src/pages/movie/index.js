import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { getMovie } from '../../services/movieDB';
import MovieDetails from '../../components/movie';

const Movie = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    movie: null,
    loading: true,
  });

  useEffect(() => {
    const load = async () => {
      const movie = await getMovie(id);
      setData({
        loading: false,
        movie,
      });
    }
    load();
    // eslint-disable-next-line
  }, []);

  if (data.loading) {
    return (
      <div className="movie">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="movie">
      <MovieDetails movie={data.movie} />
    </div>
  );
};

export default Movie;
