import PropTypes from 'prop-types';
import { get } from 'lodash';
import classNames from 'classnames';
import { useMovieDB } from '../../hooks/movieDB';

const MovieImage = ({ as, path, size, alt = '', type = 'logo', className, ...props }) => {
  const { settings } = useMovieDB();
  const sizes = get(settings.images, type + '_sizes', []);
  const imageSize = sizes.includes(size) ? size : 'original';
  const file = settings.images.base_url + imageSize + path;
  const Component = !!as ? as : 'img';
  return (
    <Component
      src={file}
      alt={alt}
      className={classNames('movie-image', className)}
      {...props}
    />
  )
}

MovieImage.propTypes = {
  as: PropTypes.element,
  path: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['backdrop', 'logo', 'poster', 'profile', 'still']),
  className: PropTypes.string,
};

export default MovieImage;
