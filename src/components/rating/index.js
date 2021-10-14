import PropTypes from 'prop-types';
import { Star, StarFill } from 'react-bootstrap-icons';
import classNames from 'classnames';

const Rating = ({ value, onChange, className, ...props }) => {
  const onClick = changedValue => {
    return () => {
      const newValue = changedValue === value ? 0 : changedValue;
      onChange(newValue);
    }
  };
  const getProps = star => {
    const iconProps = { key: star, ...props };
    if (onChange) {
      iconProps.onClick = onClick(star);
    }
    return iconProps;
  }
  return (
    <div className={classNames('rating', className)}>
      {[1, 2, 3, 4, 5].map(star => {
        const Icon = (value >= star) ? StarFill : Star;
        return (
          <Icon {...getProps(star)} />
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Rating;
