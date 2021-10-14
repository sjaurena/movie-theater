import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieDBProvider } from './context/movieDB';
import Layout from './components/layout';
import Home from './pages/home';
import Movie from './pages/movie';
import NotFound from './pages/notFound';

const App = () => {
  return (
    <MovieDBProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </MovieDBProvider>
  );
};

export default App;
