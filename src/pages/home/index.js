import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { discoverMovies, searchMovies } from '../../services/movieDB';
import { useQueryParams } from '../../hooks/url';
import Movies from '../../components/movies';

const Home = () => {
  const { query } = useQueryParams();
  const [data, setData] = useState({
    movies: null,
    loading: true,
    search: !!query,
  });

  useEffect(() => {
    const load = async () => {
      let movies;
      if (query) {
        movies = await searchMovies(query);
      } else {
        movies = await discoverMovies();
      }
      setData({
        ...data,
        loading: false,
        movies,
      });
    }
    load();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home">
      {data.loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Movies movies={data.movies.results} />
      )}  
    </div>
  );
};

export default Home;
