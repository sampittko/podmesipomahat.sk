import PropTypes from 'prop-types';
import React from 'react';

const Section = props =>
  <div
    className={`w-screen h-screen overflow-hidden bg-scroll bg-no-repeat bg-cover ${props.className}`}
    style={{ backgroundImage: props.backgroundPath ? `url(${props.backgroundPath})` : ''}}
  >
    {props.children}
  </div>;

Section.propTypes = {
  backgroundPath: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
}

export default Section;