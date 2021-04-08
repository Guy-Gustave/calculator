import React from 'react';
import PropTypes from 'prop-types';

function Display({ result, next }) {
  return (
    <div className="result">
      { next || (result || 0) }
    </div>
  );
}

Display.defaultProps = {
  result: '0',
  next: null,
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
};

export default Display;
