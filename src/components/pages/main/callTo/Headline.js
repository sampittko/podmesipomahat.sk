import PropTypes from 'prop-types';
import React from 'react';

const Headline = props =>
  <div className={`flex flex-col justify-center items-center text-6xl font-rustico-regular ${props.theme === 'blue' ? 'text-white' : ''}`}>
    <h1 className="-mb-1">{props.text.split(" ")[0]}</h1>
    <h1 className="-mt-1">{props.text.split(" ")[1]}</h1>
  </div>;

Headline.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.oneOf([
    'green',
    'blue'
  ]).isRequired,
}

export default Headline;