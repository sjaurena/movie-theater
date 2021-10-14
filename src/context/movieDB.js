import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { configuration } from '../services/movieDB';

export const MovieDBContext = createContext({
  settings: null,
  loading: true,
});

export const MovieDBProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    settings: null,
    loading: true
  });
  useEffect(() => {
    const load = async () => {
      const data = await configuration();
      setSettings({
        settings: data,
        loading: false,
      });
    }
    load();
  }, []);
  return (
    <MovieDBContext.Provider value={settings}>
      {children}
    </MovieDBContext.Provider>
  );
};

MovieDBProvider.propTypes = {
  children: PropTypes.node,
};
