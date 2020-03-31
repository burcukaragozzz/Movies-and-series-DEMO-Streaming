import React from 'react';

import './style.scss';

const Hero = props => {
  const { value } = props;

  return (
    <div className="hero-text">
      { value }
    </div>
  );
}

export default Hero;
