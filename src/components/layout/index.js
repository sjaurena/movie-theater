import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Header from './header';
import Footer from './footer';
import { useMovieDB } from '../../hooks/movieDB';
import './styles.css';

const Layout = ({ children }) => {
  const { loading } = useMovieDB();
  return (
    <div className="layout">
      <Header />
      <Container className="pt-5 pb-5 text-center" as="main">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : children}
      </Container>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
