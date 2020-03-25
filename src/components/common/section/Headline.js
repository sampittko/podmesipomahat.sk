import PropTypes from 'prop-types';
import React from 'react';

const Headline = props => 
  <div className="flex flex-col justify-end items-center h-full">
    <h1 className="font-rustico-regular text-5xl xl:pb-10 lg:pb-20 md:pb-24">
      {props.text}
    </h1>
  </div>;

Headline.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Headline;