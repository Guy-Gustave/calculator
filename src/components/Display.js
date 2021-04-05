import PropTypes from 'prop-types';

const Display = ({ result, next }) => {
  // const { result } = props;
  return (
    <div className="result">
      {next || (result || 0)}
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string
};

Display.defaultProps = {
  result: '0',
  next: null
};

export default Display;
